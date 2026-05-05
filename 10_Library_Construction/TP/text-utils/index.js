const LETTER_REGEX = /[a-zA-Z]/g;

/**
 * Menghitung jumlah huruf (A-Z saja, tanpa spasi & simbol)
 * @param {string} text
 * @returns {number}
 */
export function countLetters(text) {
  if (typeof text !== "string") return 0;

  const matches = text.match(LETTER_REGEX);
  return matches ? matches.length : 0;
}

/**
 * Menghitung jumlah kata (berbasis huruf A-Z saja)
 * @param {string} text
 * @returns {number}
 */
export function countWords(text) {
  if (typeof text !== "string") return 0;

  const words = text.match(/[a-zA-Z]+/g);
  return words ? words.length : 0;
}