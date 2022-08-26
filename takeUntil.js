// Create function taking in two parameters:
// 1. Array to work with
// 2. Callback function
// Function should return a 'slice of the array with elements
// taken from the beginning. It should keep going until the
// callback provided returns a 'truthy' value

const takeUntil = (array, callback) => {
  // check that array is an array
  if (Array.isArray(array)){

  }
  else {return "This is not an array!"}
  // Define variables for where to slice the array and truthy or falsey representation
  // of the input array
   let sliceElement = 0;
   let trueOrFalse = array.map(callback);

   // loop through array and check whether callback function is returning a truthy value

   for (let i = 0; i < trueOrFalse.length; i++) {

    // if truthy, slice the array and return it
    if (trueOrFalse[i] === true) {
      sliceElement = i;
    }
   }
   if (sliceElement !== 0) {
    const slicedArray = array.slice(0, sliceElement);
    return slicedArray;
   }
   else if (sliceElement === 0) {
    return array
   }



}

// Assert arrays equal -- for testing

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

// Test cases

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

const data3 = "Not an array"
const results3 = takeUntil(data3, x => x > 0);
assertArraysEqual(results3, "This is not an array!");

// Expected output

// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]
