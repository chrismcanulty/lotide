// assertArraysEqual function and supporting eqArrays function for test cases

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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++){
    let letter = sentence[i];
   if (letter !== " " && results[letter]) {
       results[letter].push(i)
       // no key
    } else if (letter !== " " && !results[letter]) {
        results[letter] = [];
         results[letter].push(i)
      };
  };
  return results;
}

// Test cases

let testSentence = "Hello you";

const result1 = letterPositions(testSentence);

assertArraysEqual(result1["H"], [0])
assertArraysEqual(result1["e"], [1])
assertArraysEqual(result1["l"], [2, 3])
assertArraysEqual(result1["o"], [4, 7])
assertArraysEqual(result1["y"], [6])
assertArraysEqual(result1["u"], [8])
// assertArraysEqual(result1[" "], undefined)
//
