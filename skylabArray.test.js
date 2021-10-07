const SkylabArray = require("./skylabArray");

describe("The class SkylabArray", () => {
  describe("method push", () => {
    describe("when object is {0:1, 1:2, length:2} and x is 5", () => {
      test("it should return {0:1, 1:2, 2:5, length:3}", () => {
        // Arrange
        const arr = new SkylabArray(1, 2);
        const x = 5;
        const expected1 = 3;
        const expected2 = { 0: 1, 1: 2, 2: 5, length: 3 };

        // Act
        const result1 = arr.push(x);
        const result2 = arr;

        // Assert
        expect(result1).toBe(expected1);
        expect(result2).toEqual(expected2);
      });
    });
  });
});
