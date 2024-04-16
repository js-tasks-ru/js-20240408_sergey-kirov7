/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  let acc = '';
  let result = '';

  for (const letter of string) {
    let lastLetter = acc[acc.length - 1];
    let mustCut = acc.length === size;

    if (lastLetter && (letter != lastLetter)) {
      result += acc;
      acc = letter;
    } else {
      acc = mustCut ? acc : acc + letter;
    }
  }

  result += acc;

  return result;
}
