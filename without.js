 const { assertArraysEqual } = require ('./assertArraysEqual')
const without = function (source, itemsToRemove) {
    const result = [];
    for (let num of source) {
        if (!itemsToRemove.includes(num)) {
            result.push(num);
        }
    }
    return result;
}
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = { without }