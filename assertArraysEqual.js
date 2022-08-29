// Require eqArrays function

const eqArrays = require('./eqArrays');

// assertArraysEqual function

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else if (!eqArrays(arrayOne, arrayTwo)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

// export assertArraysEqual so it can be retrieved for testing

module.exports = assertArraysEqual;
