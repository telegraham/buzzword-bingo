const ALPHABET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const CELL_COUNT = 25;
const CODE_WIDTH = 2;

export const BOARD_VERSION = "2";
export const FREE_SPACE_ID = "00";

function isBase62Id(id) {
  return typeof id === "string" && id.length === CODE_WIDTH && [...id].every((character) => ALPHABET.includes(character));
}

export function encodeBoard(board) {
  if (!Array.isArray(board) || board.length !== CELL_COUNT) throw new Error(`A board must contain exactly ${CELL_COUNT} cell IDs.`);
  if (!board.every(isBase62Id)) throw new Error("Every board cell must be a two-character Base62 ID.");
  return `${BOARD_VERSION}${board.join("")}`;
}

export function decodeBoard(hash) {
  const payload = hash.startsWith("#") ? hash.slice(1) : hash;
  const encodedCells = payload.slice(1);
  if (payload[0] !== BOARD_VERSION) throw new Error("This board URL uses an unsupported format.");
  if (encodedCells.length !== CELL_COUNT * CODE_WIDTH) throw new Error("This board URL does not contain 25 cells.");

  const board = Array.from({ length: CELL_COUNT }, (_, index) => encodedCells.slice(index * CODE_WIDTH, index * CODE_WIDTH + CODE_WIDTH));
  if (!board.every(isBase62Id)) throw new Error("Board URL contains an invalid Base62 character.");
  return board;
}

export function boardToHash(board) {
  return `#${encodeBoard(board)}`;
}
