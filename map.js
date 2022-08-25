// map function - takes in two arguments ->
// 1. array to map
// 2. callback function
// the function will return a new array based on results of callback function

const words = ["lions", "and", "tigers", "and", "bears"];

const map = (array, callback) => {
  // define empty array for function to add to
  const results = [];
  // loop through each item in the array
  for (let item of array) {
  // call the callback function, and push the modified items into results array
    results.push(callback(item));
  }

// return modified array as our result
  return results
};

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

const results1 = map(words, word => word[0]);
const test1 = ['l', 'a', 't', 'a', 'b']
console.log(assertArraysEqual(results1, test1));

const results2 = map(words, word => word.length);
const test2 = [5, 3, 6, 3, 5]
console.log(assertArraysEqual(results2, test2));

const results3 = map(words, word => word.toUpperCase() + "!");
const test3 = ["LIONS!", "AND!", "TIGERS!", "AND!", "BEARS!"]
console.log(assertArraysEqual(results3, test3));

const empty = [];

const results4 = map(empty, word => word.toUpperCase);
const test4 = []
console.log(assertArraysEqual(results4, test4));

const nested = [['lions'], ['tigers'], ['bears']];

const results5 = map(empty, word => word.toUpperCase);
const test5 = []
console.log(assertArraysEqual(results5, test5));

const objectArray = [
  {
  animal: "lion",
  diet: "carnivore",
  friendly: "yes"
  },
  {
  animal: "tiger",
  diet: "carnivore",
  friendly: "no"
  },
  {
  animal: "bear",
  diet: "omnivore",
  friendly: "sometimes"
  }
];
