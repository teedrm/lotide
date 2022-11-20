// IMPLEMENT FUNCTION
const eqObjects = function(object1, object2) {
  let Obj1 = Object.keys(object1);
  let Obj2 = Object.keys(object2);
  if (Obj1.length !== Obj2.length) {
    return false;
  } else {
    for (let i of Obj1) {
      if (Array.isArray(object1[i]) && Array.isArray(object2[i])) {
        if (!eqArrays(object1[i], object2[i])) {
          return false;
        } else if (typeof object1[i] === "object" && typeof object2 === "object") {
          if (!eqObjects(object1[i], object2[i])) {
            return false;
          }
        } else if (object1[i] !== object2[i]) {
          return false;
        }
      }
    }
  }
  return true;
};

// ACTUAL FUNCTION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑 Assertion Failed:  ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// TEST CODE
assertObjectsEqual({ a: "1", b: 2 }, { b: 2, a: "1" });