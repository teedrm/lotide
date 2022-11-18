// IMPLEMENT FUNCTION

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    // is array & arrays are not equal
    if ((Array.isArray(arr1[i]) && Array.isArray(arr2[i])) && (!eqArrays(arr1[i]), arr2[i])) {
      return false;
      // arrays not equal
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// ACTUAL FUNCTION

const takeUntil = function(array, callback) {
  let results = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      results = array.slice(0, i);
      return results;
    }
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, data1.slice(0, 5));
assertArraysEqual(results2, data2.slice(0, 4));

