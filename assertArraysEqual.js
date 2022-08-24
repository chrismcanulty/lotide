const assertArraysEqual = function(eqArrays, arrayOne, arrayTwo) {
  console.log("Equal arrays", eqArrays)
  if (eqArrays) {
    console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

let array10 = [1, 2, 3];
let array20 = [1, 2, 3];
console.log(assertArraysEqual(eqArrays(array10, array20), array10, array20))

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
