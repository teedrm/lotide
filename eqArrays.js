
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

module.exports = eqArrays;