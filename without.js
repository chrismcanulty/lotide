const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
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
  let newArray = sourceArray.filter((comparison) => {
    return itemsToRemoveArray.indexOf(comparison) === -1
  })
  return newArray
}


const originalArray = ["1", "2", "3"];
const expectedOutput = ["1", "2"]
const arrayCompare = without(originalArray, [1, 2, "3"]);
assertArraysEqual(arrayCompare, expectedOutput)

// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

console.log(without([1, 2, 3], [1])) // => [2, 3]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
