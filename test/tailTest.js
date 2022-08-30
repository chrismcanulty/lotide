// Mocha and Chai based test code

const assert = require('chai').assert;
const tail = require('../tail');

const array = ["Yo Yo", "Lighthouse", "Labs"];
tail(array);

// const tail = require('../tail.js');
// const assertEqual = require('../assertEqual');

describe("#tail", () => {
  it("returns array [\"Lighthouse\", \"Labs\"] for [\"Hello\", \"Lighthouse\", \"Labs\"]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns array [7, 50, 12, 29] for [1, 7, 50, 12, 29]", () => {
    assert.deepEqual(tail([1, 7, 50, 12, 29]), [7, 50, 12, 29]);
  });

  it("does not modify the original array [\"Yo Yo\", \"Lighthouse\", \"Labs\"]", () => {
    assert.deepEqual(array, ["Yo Yo", "Lighthouse", "Labs"]);
  });
})


// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture th return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
