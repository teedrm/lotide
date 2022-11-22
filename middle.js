const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

let middle = function(arr) {
  let mid = arr.length / 2;
  let newArr = [];
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 0) {
    return arr.slice(mid - 1, mid + 1);
  } else {
    newArr.push(arr[Math.round(mid - 1)]);
    return newArr;
  }
};

module.exports = middle;

