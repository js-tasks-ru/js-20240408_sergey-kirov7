/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  const res = [];

  if (!arr) {return [];}

  arr.forEach(item => {
    if (!res.includes(item)) {
      res.push(item);
    }
  });

  return res;
}
