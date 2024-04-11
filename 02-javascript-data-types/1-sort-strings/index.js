/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
    const res = new Array(...arr);

    return res.sort((a, b) => {
        if (param === 'asc') {
            return a.localeCompare(b, "default", { caseFirst: 'upper' });
        } else if (param === 'desc') {
            return b.localeCompare(a, "default", { caseFirst: 'upper' });
        }
    });
}
