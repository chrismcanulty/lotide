// Requies assertArraysEqual function

const assertArraysEqual = require('./assertArraysEqual');

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

// Export function for testing

module.exports = middle;
