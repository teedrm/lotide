// TEST/ASSERTION FUNCTIONS
const eqArrays = function (arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        // is array & arrays are not equal
        if ((Array.isArray(arr1[i]) && Array.isArray(arr2[i])) && (!eqArrays(arr1[i]), arr2[i])) {
            return false;
        // arrays not equal 
        } else if (arr1[i] !== arr2[i]) {
            return false
        }
    }
    return true;
}


const assertArraysEqual = function(actual, expected) {
    if (eqArrays(actual, expected)) {
      console.log(`✅ Assertion Passed: "${actual}" === "${expected}"`);
    } else {
      console.log(`🛑 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

// ACTUAL FUNCTION
const middle = function (arr) {
let middleArr = Math.floor(arr.length/2)
if (arr.length < 3) {
    return [];
} else if (arr.length % 2 === 0) {
    return arr.slice(middleArr-1, middleArr+1);
} else {
    return [middleArr+1]
}
};
  
// TEST
console.log(middle([1, 2, 3, 4]) )// => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6]) )// => [3, 4]
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1])) // => []
console.log(middle([1, 2]))