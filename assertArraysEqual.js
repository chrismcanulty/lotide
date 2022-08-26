const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else if (!eqArrays(arrayOne, arrayTwo)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

function eqArrays(array1, array2) {
  if (!array1 || !array2) {
    return false;
  } else if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

let array10 = [1, 2, 3];
let array20 = [1, 2, 3];
console.log(assertArraysEqual(array10, array20))
