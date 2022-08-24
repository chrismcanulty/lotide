// Assert equal function for test cases

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetter = function(sentence){
  const letterSummary = {};
  for (letter of sentence){
    if (letter === " "){
      letterSummary
    } else {
      if (letterSummary[letter]) {
      letterSummary[letter] += 1;
      } else (letterSummary[letter] = 1);
      }
  } console.log("Summary", letterSummary);
return letterSummary
}

const testSentence = "Hello you";

const result1 = countLetter(testSentence);

assertEqual(result1["H"], 1);
assertEqual(result1["o"], 2);
assertEqual(result1["l"], 2);
assertEqual(result1["u"], 1);
assertEqual(result1[" "], undefined);
