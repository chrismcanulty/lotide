// test.tailTest.js

const tailTest = require('../tail.js');
const assertEqual = require('../assertEqual');

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); //ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: Check the returned array elements
const result2 = tail([1, 7, 50, 12, 29]);
assertEqual(result2.length, 4); //ensure we get back four elements
assertEqual(result2[2], 12); // ensure second element is 12
assertEqual(result2[4], undefined); // ensure fourth element returns undefined

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture th return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
