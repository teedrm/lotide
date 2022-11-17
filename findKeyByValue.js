// IMPLEMENT FUNCTION

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//ACTUAL FUNCTION


const findKeyByValue = function(object, value) {
  let objectKeys = Object.keys(object);
  for (let i of objectKeys) {
    if (object[i] === value) {
      return i;
    }
  }
};
  

// TEST

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
  
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);