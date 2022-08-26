// Assert Equal function for test cases

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Implement function findKey which takes in an object and callback
// Function will scan the object and return first key for which
// callback returns a truthy value. If no key found, return undefined

findKey = (object, callback) => {
  for (const key in object) {
    const objectValue = object[key];
    // console.log(objectValue);
    // console.log(callback(objectValue));
    if (callback(objectValue)) {
      return key;
    }
  }
}

// Test cases

let inputObject = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}

// console.log(findKey(inputObject, x => x.stars === 2)) // => "noma"
assertEqual(findKey(inputObject, x => x.stars === 2), "noma")
assertEqual(findKey(inputObject, x => x.stars === 0), undefined)
assertEqual(findKey(inputObject, x => x.stars === 3), "Akaleri")
