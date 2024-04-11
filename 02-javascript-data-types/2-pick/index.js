/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
    const entries = Object.entries(obj);
    const res = {};

    entries.forEach(item => {
        const [key, value] = item;

        if (fields.includes(key)) {
           res[key] = value;
        }
    });

    return res;
};
