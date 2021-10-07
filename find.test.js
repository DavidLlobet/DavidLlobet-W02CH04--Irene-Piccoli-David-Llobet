function find(arr, fun) {
  for (const i of arr) {
    if (fun(i)) {
      return i
    }
  }

  return "undefined";
}

describe("function find", () => {
  describe("si la función find recibe [1,2,3] y la función (x => x > 1)", () => {
    test("entonces retorna 2", () => {
      const arr = [1, 2, 3];
      const fun = (num) => num > 1;
      const expected = 2;

      const result = find(arr, fun);

      expect(result).toBe(expected);
    });
  });

  describe("si la función find recibe [1,2,3] y la función (x => x > 3)", () => {
    test("entonces retorna 'undefined'", () => {
      const arr = [1, 2, 3];
      const fun = (num) => num > 3;
      const expected = 'undefined';

      const result = find(arr, fun);

      expect(result).toBe(expected);
    });
  });
});
