const assert = require('chai').assert;
const middle = require('../middle');

// TEST CODE

// console.log(middle([1, 2]))
// console.log(middle([1, 2, 3, 4, 5, 6, 7]))
// console.log(middle([1, 2, 3, 4, 5, 6]))

describe("#middle", () => {
  it("returns middle element [3] for array with odd number of elements [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns empty array [] for an array of length 2 or less", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns an empty array [] when the input is an empty array", () => {
    assert.deepEqual(middle([]), []);
  });

  it("return the middle two elements [2, 3] for array with even number of elements [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
})
