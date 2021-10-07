function some(arr, fun) {
  let bool;

  for (const i of arr) {
    if (fun(i)) {
      return true;
    }
  }

  return false;
}

describe("function some", () => {
  describe("si la función some recibe [1,2,3] y la función (x => x < 2)", () => {
    test("entonces retorna true", () => {
      const arr = [1, 2, 3];
      const fun = (num) => num < 2;
      const expected = true;

      const result = some(arr, fun);

      expect(result).toBe(expected);
    });
  });

  describe("si la función some recibe [1,2,3] y la función (x => x < 2)", () => {
    test("entonces retorna true", () => {
      const arr = [1, 2, 3];
      const fun = (num) => num < 2;
      const expected = true;

      const result = some(arr, fun);

      expect(result).toBe(expected);
    });
  });
});
