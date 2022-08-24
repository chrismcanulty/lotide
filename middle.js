// Test/assertion functions

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

const eqArrays = function(array1, array2) {
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

// Actual function

// return middle-most element(s) of an array

const middle = function(array) {
  let middleArray = [];

  // for arrays with 1 or two elements, return an empty array

  if (array.length < 3) {
    return middleArray;

    // for arrays with odd number of elements, return array containing single middle element

  } else if (array.length % 2 !== 0) {
    middleArray.push(array[Math.floor(array.length/2)]);
    return middleArray;
    // for arrays with even number of elements, return array containing two middle elements

  } else {
    middleArray.push((array[(array.length/2 - 1)]), (array[(array.length/2)]));
    return middleArray;
  }
}

// TEST CODE

// console.log(middle([1, 2]))
// console.log(middle([1, 2, 3, 4, 5, 6, 7]))
// console.log(middle([1, 2, 3, 4, 5, 6]))

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual((middle([1, 2])), []);
assertArraysEqual((middle([])), []);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
