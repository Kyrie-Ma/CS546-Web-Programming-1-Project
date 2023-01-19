const arrayUtils = require("./arrayUtils");
const stringUtils = require("./stringUtils");
const objUtils = require("./objUtils");
// Mean Tests
console.log('mean test: ');
try {
    // Should Pass
    const meanOne = arrayUtils.mean([1,2,3]);
    console.log(meanOne);
    console.log('mean passed successfully');
 } catch (e) {
    console.error(e);
    console.error('mean failed test case');
 }
 try {
    // Should Fail
    const meanTwo = arrayUtils.mean([]);
    console.log(meanTwo);
    console.log('mean passed successfully');
 } catch (e) {
    console.error(e);
    console.error('mean failed test case');
 }


 // medianSquared test
console.log('medianSquared test: ');
try {
    // Should Pass
    const medianSquaredOne = arrayUtils.medianSquared([1,2,3]);
    console.log(medianSquaredOne);
    console.log('medianSquared passed successfully');
 } catch (e) {
    console.error(e);
    console.error('medianSquared failed test case');
 }
 try {
    // Should Fail
    const medianSquaredTwo = arrayUtils.medianSquared([1, "banana"]);
    console.log(medianSquaredTwo);
    console.log('medianSquared passed successfully');
 } catch (e) {
    console.error(e);
    console.error('medianSquared failed test case');
 }

 // maxElement test
 console.log('maxElement test: ');
try {
    // Should Pass
    const maxElementOne = arrayUtils.maxElement([1,2,3]);
    console.log(maxElementOne);
    console.log('maxElement passed successfully');
 } catch (e) {
    console.error(e);
    console.error('maxElement failed test case');
 }
 try {
    // Should Fail
    const maxElementTwo = arrayUtils.maxElement(1,2,3);
    console.log(maxElementTwo);
    console.log('maxElement passed successfully');
  } catch (e) {
    console.error(e);
    console.error('maxElement failed test case');
 }

 // fill test
 console.log('fill test: ');
 try {
    // Should Pass
    const fillOne = arrayUtils.fill(6);
    console.log(fillOne);
    console.log('fill passed successfully');
  } catch (e) {
    console.error(e);
    console.error('fill failed test case');
  }
  try {
    // Should Pass
    const fillTwo = arrayUtils.fill(3, 'Welcome');
    console.log(fillTwo);
    console.log('fill passed successfully');
  } catch (e) {
    console.error(e);
    console.error('fill failed test case');
  }

 // countRepeating test
 console.log('countRepeating test: ');
 try {
    // Should Pass
    const countRepeatingOne = arrayUtils.countRepeating([7, '7', 13, true, true, true, "Hello","Hello", "hello"]);
    console.log(countRepeatingOne);
    console.log('countRepeating passed successfully');
  } catch (e) {
    console.error(e);
    console.error('countRepeating failed test case');
  }
  try {
    // Should Fail
    const countRepeatingTwo = arrayUtils.countRepeating([]);
    console.log(countRepeatingTwo);
    console.log('countRepeating passed successfully');
  } catch (e) {
    console.error(e);
    console.error('countRepeating failed test case');
  }

 // isEqual test
 console.log('isEqual test: ');
 try {
    // Should Pass
    const isEqualOne = arrayUtils.isEqual([1, 2, 3], [3, 1, 2]);
    console.log(isEqualOne);
    console.log('isEqual passed successfully');
  } catch (e) {
    console.error(e);
    console.error('isEqual failed test case');
  }
  try {
    // Should Fail
    const isEqualTwo = arrayUtils.isEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [[3, 1, 2], [5, 4, 11], [9, 7, 8]]);
    console.log(isEqualTwo);
    console.log('isEqual passed successfully');
  } catch (e) {
    console.error(e);
    console.error('isEqual failed test case');
  }

 // camelCase test
 console.log('camelCase test: ');
 try {
    // Should Pass
    const camelCaseOne = stringUtils.camelCase('my function rocks');
    console.log(camelCaseOne);
    console.log('camelCase passed successfully');
  } catch (e) {
    console.error(e);
    console.error('camelCase failed test case');
  }
  try {
    // Should Fail
    const camelCaseTwo = stringUtils.camelCase(["Hello", "World"]);
    console.log(camelCaseTwo);
    console.log('camelCase passed successfully');
  } catch (e) {
    console.error(e);
    console.error('camelCase failed test case');
  }

// replaceChar test
console.log('replaceChar test: ');
try {
   // Should Pass
   const replaceCharOne = stringUtils.replaceChar("Daddy");
   console.log(replaceCharOne);
   console.log('replaceChar passed successfully');
 } catch (e) {
   console.error(e);
   console.error('replaceChar failed test case');
 }
 try {
   // Should Pass
   const replaceCharTwo = stringUtils.replaceChar("Hello, How are you? I hope you are well");
   console.log(replaceCharTwo);
   console.log('replaceChar passed successfully');
 } catch (e) {
   console.error(e);
   console.error('replaceChar failed test case');
 }

// mashUp test
console.log('mashUp test: ');
try {
   // Should Pass
   const mashUpOne = stringUtils.mashUp("abc", "cde");
   console.log(mashUpOne);
   console.log('mashUp passed successfully');
 } catch (e) {
   console.error(e);
   console.error('mashUp failed test case');
 }
 try {
   // Should Fail
   const mashUpTwo = stringUtils.mashUp("h", "Hello");
   console.log(mashUpTwo);
   console.log('mashUp passed successfully');
 } catch (e) {
   console.error(e);
   console.error('mashUp failed test case');
 }

// makeArray test
console.log('makeArray test: ');
try {
   // Should Pass
   const first = { x: 2, y: 3};
   const second = { a: 70, x: 4, z: 5 };
   const third = { x: 0, y: 9, q: 10 };
   const objects = [first, second]
   const makeArrayOne = objUtils.makeArray({ x: 2, y: 3 }, { x: 2, y: 3 });
   console.log(makeArrayOne);
   console.log('makeArray passed successfully');
 } catch (e) {
   console.error(e);
   console.error('makeArray failed test case');
 }
 try {
   // Should Fail
   const first = { x: 2, y: 3};
   const second = { a: 70, x: 4, z: 5 };
   const third = { x: 0, y: 9, q: 10 };
   const objects = [second];
   const makeArrayTwo = objUtils.makeArray(objects);
   console.log(makeArrayTwo);
   console.log('makeArray passed successfully');
 } catch (e) {
   console.error(e);
   console.error('makeArray failed test case');
 }

// isDeepEqual test
console.log('isDeepEqual test: ');
try {
   // Should Pass
   const first = {};
   const second = {};
   const third = {a: 2, b: 3};
   const forth = {a: {sA: "Hello", sB: "There", sC: "Class"}, b: 7, c: true, d: "Test"}
   const fifth  = {c: true, b: 7, d: "Test", a: {sB: "There", sC: "Class", sA: "Hello"}}
   const isDeepEqualOne = objUtils.isDeepEqual(first, second);
   console.log(objUtils.isDeepEqual2(first, second));
   console.log('isDeepEqual passed successfully');
 } catch (e) {
   console.error(e);
   console.error('isDeepEqual failed test case');
 }
 try {
   // Should Pass
   const first = {a: 2, b: 3};
   const second = {a: 2, b: 4};
   const third = {a: 2, b: 3};
   const forth = {a: {sA: "Hello", sB: "There", sC: "Class"}, b: 7, c: true, d: "Test"}
   const fifth  = {c: true, b: 7, d: "Test", a: {sB: "There", sC: "Class", sA: "Hello"}}
   const isDeepEqualTwo = objUtils.isDeepEqual(forth, fifth);
   console.log(objUtils.isDeepEqual2(forth, fifth));
   console.log('isDeepEqual passed successfully');
 } catch (e) {
   console.error(e);
   console.error('isDeepEqual failed test case');
 }


 // computeObject test
console.log('computeObject test: ');
try {
   // Should Pass
   const computeObjectOne = objUtils.computeObject({ a: 3, b: 7, c: 5 }, n => n * 2);
   console.log(computeObjectOne);
   console.log('computeObject passed successfully');
 } catch (e) {
   console.error(e);
   console.error('computeObject failed test case');
 }
 try {
   // Should Fail
   const computeObjectTwo = objUtils.computeObject({ a: 3, b: 7, c: 'a' }, n => n * 3);
   console.log(computeObjectTwo);
   console.log('computeObject passed successfully');
 } catch (e) {
   console.error(e);
   console.error('computeObject failed test case');
 }
