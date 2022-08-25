// Assert equal function

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Equal arrays function

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

// Returns true if both objects have identical keys with identical values.
// Otherwise return false

const eqObjects = function (object1, object2) {

let functionsEqual = true;

// Two objects should have same number of keys

  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
  if (object1Keys.length !== object2Keys.length) {
  return false
  }

// Value for each key of one object should be equal to value for the same
// key in another object

  for (const key1 in object1) {
  const value1 = object1[key1];
  if (!Array.isArray(value1)){
    if (value1 !== object2[key1]) {
    return false
    }
  }
  else if (Array.isArray(value1)) {
    if (!eqArrays(value1, object2[key1])) {
     return false
    }
  }
  } return true
};

// FUNCTION IMPLEMENTATION

const assertObjectsEqual = function(objectOne, objectTwo) {
  const inspect = require('util').inspect;
  if (eqObjects(objectOne, objectTwo)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(objectOne)} === ${inspect(objectTwo)}`)
  } else if (!eqObjects(objectOne, objectTwo)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(objectOne)} !== ${inspect(objectTwo)}`)
  }
//  console.log(`Example label: ${inspect(actual)}`);
}

// Tests

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
assertObjectsEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertObjectsEqual(ab, abc);

const xy = { a: "1", b: "3" };
const yz = { b: "3", a: "4" };
eqObjects(xy, yz); // => false
assertObjectsEqual(xy, yz);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertObjectsEqual(cd, cd2);

const nullObject = {};
eqObjects(nullObject, cd2); // => false
assertObjectsEqual(nullObject, cd2);
