/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  const strToArr = (str) => {
    const simbArr = [...str];
    const res = [];
    let resItem = [];
      
    simbArr.forEach((item) => {
      if (resItem.length === 0 || resItem.includes(item)) {
        resItem.push(item);
      } else {
        res.push(resItem);
        resItem = [];
        resItem.push(item);
      }
    });

    res.push(resItem);

    return res;
  };

  const result = strToArr(string).map(item => item.join('').slice(0, size));

  return result.join('');
}
