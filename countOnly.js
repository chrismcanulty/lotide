// Assert equal function for test cases

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
// countOnly: receive an array of items and object containing items to be counted.
//  should output an object indicating the count of each item in allItems per itemsToCount parameter

const countOnly = function(allItems, itemsToCount){
  const results = {};

// loop through all items within the allItems array

  for (const item of allItems) {

// only check results array for item in allItems
// if the value in itemsToCount is true

    if (itemsToCount[item]){

// add 1 to the value of the key within results object
// if the key already exists within results object

      if (results[item]) {
        results[item] += 1;

// else if the key does not exist in the results object already,
// add value of item to the results object and assign it a value of 1

      } else (results[item]) = 1;
    }
  }
  return results;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
