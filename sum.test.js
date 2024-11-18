const sum = require('./sum');

test('adds 1 + 2 equal to 3', () => {
  expect(sum(1,2)).toBe(3);
});


test('adds 1 + 2 equal to 3', () => {
  expect(sum(1,2)).not.toBe(5);
})

// CHECK FOR TRUTHY & FALSY VALUES

// toBeNull matches only NULL
// toBeUndefined matches only undefined
// toBeTruthy matches anything that an if statement treates as true.
// toBeFalsy matches anything that an if statement treats as false.