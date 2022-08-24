const assertArraysEqual = function(eqArrays, arrayOne, arrayTwo) {
  if (eqArrays) {
    console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
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

function without(sourceArray, itemsToRemoveArray) {
  let newArray = sourceArray;
  if (!itemsToRemoveArray || !sourceArray) {
    return sourceArray;
  } for (let i = 0; i < sourceArray.length; i++) {
    for (let j = 0; j < itemsToRemoveArray.length; j++) {
      if (sourceArray[i] === itemsToRemoveArray[j]) {
        newArray.splice(i, 1);
      }
    }
  } return newArray
}

assertArraysEqual(eqArrays(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]), without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(eqArrays(words, ["hello", "world", "lighthouse"]), words, ["hello", "world", "lighthouse"]);
