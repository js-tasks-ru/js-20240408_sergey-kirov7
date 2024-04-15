/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  const res = new Map();

  if (!arr) {return [];}

  arr.forEach(item => {
    if (!res.has(item)) {
      res.set(item, item);
    }
  });

  return Array.from(res.keys());
}
