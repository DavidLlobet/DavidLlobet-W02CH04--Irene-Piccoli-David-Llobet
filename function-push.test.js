//const { expect } = require("@jest/globals");
//const { test } = require("picomatch");
//const { describe } = require("yargs");

function push(arr, x) {
  const lion = arr.length;
  arr[lion] = x;

  return [arr, arr.length];
}

describe("Given a function push", function() {
  describe("when arr is [1, 2, 3] and x is 5", function() {
    test("it should return [1, 2, 3, 5] and 4", function() {

      //Arrange
      const arr = [1, 2, 3];
      const x = 5;
      const expected = [[1, 2, 3, 5], 4]

      //Act
      const result = push(arr, x);

      //Assert
      expect(result).toEqual(expected);
    })
  })
})