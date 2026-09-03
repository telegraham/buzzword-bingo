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
    existingStamp.remove();
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

try {
  renderBoard(getBoardFromUrl());
} catch (error) {
  console.warn(error.message);
  renderBoard(createDefaultBoard());
}

selectionState = loadSelectionState();
restoreSelections();
updateFavicon();
enableSelection();
