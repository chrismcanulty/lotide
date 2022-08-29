const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE

// console.log(middle([1, 2]))
// console.log(middle([1, 2, 3, 4, 5, 6, 7]))
// console.log(middle([1, 2, 3, 4, 5, 6]))

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual((middle([1, 2])), []);
assertArraysEqual((middle([])), []);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
