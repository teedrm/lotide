// IMPLEMENT FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);
