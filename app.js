import { boardToHash, decodeBoard, FREE_SPACE_ID } from "./board-codec.js";
import { phrasesById } from "./buzzwords.js";

const CELL_COUNT = 25;
const CENTER_CELL_INDEX = 12;
let selectionState = new Map();

function shuffle(values) {
  for (let index = values.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [values[index], values[swapIndex]] = [values[swapIndex], values[index]];
  }
  return values;
}

function createDefaultBoard() {
  const board = shuffle(Object.keys(phrasesById)
    .filter((id) => phrasesById[id].deactivated !== true)
  ).slice(0, CELL_COUNT);
  board[CENTER_CELL_INDEX] = FREE_SPACE_ID;
  return board;
}

function getBoardFromUrl() {
  if (!window.location.hash) {
    const board = createDefaultBoard();
    history.replaceState(null, "", boardToHash(board));
    return board;
  }

  return decodeBoard(window.location.hash);
}

function phraseForCell(id) {
  if (id === FREE_SPACE_ID) {
    return "Free space";
  }

  const phrase = phrasesById[id];
  return phrase ? phrase.text : `Unknown phrase (${id})`;
}

function renderBoard(board) {
  const cells = document.querySelectorAll("#bingo tbody td");

  cells.forEach((cell, index) => {
    const id = board[index];
    cell.textContent = phraseForCell(id);
    cell.dataset.cellIndex = index;
    cell.dataset.phraseId = id;
  });
}

function renderEnabledPhrases(board) {
  const list = document.querySelector("#enabled-phrase-list");
  const count = document.querySelector("#enabled-phrase-count");
  const currentPhraseIds = new Set(board.filter((id) => id !== FREE_SPACE_ID));
  const enabledPhrases = Object.entries(phrasesById)
    .filter(([, phrase]) => phrase.deactivated !== true)
    .map(([id, phrase]) => ({ id, text: phrase.text }))
    .sort((a, b) => a.text.localeCompare(b.text));

  count.textContent = `${enabledPhrases.length}`;
  list.replaceChildren(...enabledPhrases.map(({ id, text }) => {
    const item = document.createElement("li");
    item.textContent = text;

    if (currentPhraseIds.has(id)) {
      item.classList.add("phrase-drawer__item--current");
    }

    return item;
  }));
}

function enablePhraseDrawer() {
  const button = document.querySelector("#info-button");
  const drawer = document.querySelector("#phrase-drawer");
  const board = document.querySelector("#bingo");

  function matchDrawerHeight() {
    drawer.style.height = `${board.offsetHeight}px`;
  }

  function toggleDrawer(forceOpen) {
    const isOpen = forceOpen ?? !drawer.classList.contains("is-open");
    drawer.classList.toggle("is-open", isOpen);
    button.classList.toggle("is-open", isOpen);
    button.setAttribute("aria-expanded", String(isOpen));
    button.setAttribute("aria-label", isOpen ? "Close enabled phrases" : "Show enabled phrases");
    button.textContent = isOpen ? "x" : "i";
  }

  button.addEventListener("click", () => toggleDrawer());
  window.addEventListener("resize", matchDrawerHeight);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") toggleDrawer(false);
  });

  matchDrawerHeight();
}

function clampOffset(value) {
  return Math.max(-20, Math.min(20, value));
}

function selectionStorageKey() {
  return `buzzword-bingo:selections:${window.location.hash}`;
}

function loadSelectionState() {
  try {
    const savedState = JSON.parse(window.localStorage.getItem(selectionStorageKey()));

    if (!savedState || typeof savedState !== "object") {
      return new Map();
    }

    return new Map(
      Object.entries(savedState)
        .filter(([index, offset]) => Number.isInteger(Number(index)) && offset && Number.isFinite(offset.x) && Number.isFinite(offset.y))
        .map(([index, offset]) => [index, { x: clampOffset(offset.x), y: clampOffset(offset.y) }])
    );
  } catch {
    return new Map();
  }
}

function saveSelectionState() {
  try {
    window.localStorage.setItem(selectionStorageKey(), JSON.stringify(Object.fromEntries(selectionState)));
  } catch {
    // The board remains usable if browser storage is unavailable.
  }
}

function updateFavicon() {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const favicon = document.querySelector("#favicon");

  canvas.width = 16;
  canvas.height = 16;
  context.fillStyle = "black";
  context.fillRect(0, 0, 16, 16);

  for (let index = 0; index < CELL_COUNT; index += 1) {
    context.fillStyle = selectionState.has(String(index)) ? "#da1edf" : "white";
    context.fillRect(1 + (index % 5) * 3, 1 + Math.floor(index / 5) * 3, 2, 2);
  }

  favicon.href = canvas.toDataURL("image/png");
}

function addStamp(cell, offsetX, offsetY) {
  const bounds = cell.getBoundingClientRect();
  const stamp = document.createElement("span");

  stamp.className = "ink-stamp";
  stamp.style.width = `${bounds.height - 10}px`;
  stamp.style.height = `${bounds.height - 10}px`;
  stamp.style.setProperty("--stamp-x", `${offsetX}px`);
  stamp.style.setProperty("--stamp-y", `${offsetY}px`);

  cell.append(stamp);
  cell.classList.add("selected");
}

function toggleStamp(event) {
  const cell = event.currentTarget;
  const existingStamp = cell.querySelector(".ink-stamp");

  if (existingStamp) {
    existingStamp.classList.add("ink-stamp--removing");
    existingStamp.addEventListener("animationend", () => existingStamp.remove(), { once: true });
    cell.classList.remove("selected");
    selectionState.delete(cell.dataset.cellIndex);
    saveSelectionState();
    updateFavicon();
    return;
  }

  const bounds = cell.getBoundingClientRect();
  const offsetX = clampOffset(event.clientX - (bounds.left + bounds.width / 2));
  const offsetY = clampOffset(event.clientY - (bounds.top + bounds.height / 2));

  addStamp(cell, offsetX, offsetY);
  selectionState.set(cell.dataset.cellIndex, { x: offsetX, y: offsetY });
  saveSelectionState();
  updateFavicon();
}

function restoreSelections() {
  document.querySelectorAll("#bingo tbody td").forEach((cell) => {
    const offset = selectionState.get(cell.dataset.cellIndex);

    if (offset) {
      addStamp(cell, offset.x, offset.y);
    }
  });
}

function enableSelection() {
  document.querySelectorAll("#bingo tbody td").forEach((cell) => {
    cell.addEventListener("click", toggleStamp);
  });
}

let board;

try {
  board = getBoardFromUrl();
  renderBoard(board);
} catch (error) {
  console.warn(error.message);
  board = createDefaultBoard();
  renderBoard(board);
}

renderEnabledPhrases(board);
selectionState = loadSelectionState();
restoreSelections();
updateFavicon();
enableSelection();
enablePhraseDrawer();
