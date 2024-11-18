const functions = require('./functions');
const sum = require('./functions');

test('adds 1 + 2 equal to 3', () => {
  expect(functions.add(1,2)).toBe(3);
});


test('adds 1 + 2 is not equal to ', () => {
  expect(functions.add(1,2)).not.toBe(5);
})

// CHECK FOR TRUTHY & FALSY VALUES

// toBeNull matches only NULL
// toBeUndefined matches only undefined
// toBeTruthy matches anything that an if statement treates as true.
// toBeFalsy matches anything that an if statement treats as false.


test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
})