// ASSERT EQUAL FUNCTION FROM assertEqual.js
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// HEAD FUNCTION

head = function(array) {
  return array[0];
}

// TEST ASSERTIONS

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse Labs", "Labs"]), "Hello");
assertEqual(head([5]), 5);
assertEqual(head([]), undefined);
