/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const getter = (obj) => {
    const keys = path.split('.');
    const entries = Object.entries(obj);
    let res = obj;

    if (Object.keys(obj).length === 0) {
      return undefined;
    }

    keys.forEach(item => {
      res = res[item];
    });

    if (res) {
      return res;
    } else if (res === null) {
      return null;
    } else {
      return undefined;
    }
  };

  return getter;
}
