// test/headTest.js

const headTest = require('../head');
const assertEqual = require('../assertEqual');

// TEST ASSERTIONS

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse Labs", "Labs"]), "Hello");
assertEqual(head([5]), 5);
assertEqual(head([]), undefined);
