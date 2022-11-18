// IMPLEMENT FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// ACTUAL FUNCTION
const findKey = (object, callback) => {
  for (let i in object) {
    if (callback(object[i])) {
      return i;
    }
  }
};

findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

let object = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

let actual1 = findKey(object, x => x.stars === 2);
let expected1 = "noma";

let actual2 = findKey(object, x => x.stars === 1);
let expected2 = "Blue Hill";

let actual3 = findKey(object, x => x.stars === 123);
let expected3 = "undefined";

assertEqual(actual1, "noma");
assertEqual(actual2, "Blue Hill");
assertEqual(actual3,  undefined);