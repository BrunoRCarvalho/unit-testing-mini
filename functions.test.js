const {
  add,
  returnTwo,
  greeting,
  returnEmail,
  divide,
  multiply,
  subtract
} = require("./functions");

test("Should Greet User", () => {
  expect(greeting("Steven")).toBe("Hello, Steven.");
  expect(greeting("John")).toBe("Hello, John.");
});

test("Should Return Two", () => {
  expect(returnTwo()).toBe(2);
});

test("Return Email", () => {
  expect(returnEmail("steve@gmail.com")).toBe("steve@gmail.com");
  expect(returnEmail("john@gmail.com")).toBe("john@gmail.com");
});

describe("Math Functions", () => {
  test("Add 2 integers together", () => {
    expect(add(2, 2)).toBe(4);
    expect(add(4, 4)).toBe(8);
  });

  test("Multiply 2 integers", () => {
    expect(multiply(2, 2)).toBe(4);
    expect(multiply(4, 4)).toBe(16);
  });

  test("Subtract 2 integers", () => {
    expect(subtract(2, 2)).toBe(0);
    expect(subtract(4, 2)).toBe(2);
  });

  test("Divide 2 integers", () => {
    expect(divide(4, 2)).toBe(2);
    expect(divide(6, 2)).toBe(3);
  });
});
