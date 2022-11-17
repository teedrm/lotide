// IMPLEMENT FUNCTION
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };

  
  // ACTUAL FUNCTION
  const countLetters = function (string){
    let results = {};
    for (let i of string) {
        if (i !== '') {
            if (results[i]) {
                results[i] += 1;
            } else{
                results[i] = 1;
            }
        }
    }
    return results;
  }

    // TEST
  console.log( countLetters("lighthouse in the house"));