const functions = require('./functions');

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

test("Should be Falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
})

test("Should be Falsy", () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
})

// toBe is not work for objects
// toEqual
test("Should be get user fullName", () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Navin',
    lastName: 'Gurung'
  })
})

// Less than and greater than

test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
})

// Regex(Regular expression)

test('There is no I in Team', () => {
  expect('team').not.toMatch(/I/);
})

// Arrays
test('Admin should be in username', () => {
  userames = ["John", "Michel", "Jackson"];
  expect(userames).toContain('John');
})


// Working with async data

test('User Fetch name should be Leanne Graham', () => {
  expect.assertions(1);
  return functions.fetchUser().then(data => {
    expect(data.name).toEqual('Leanne Graham');
  })
})