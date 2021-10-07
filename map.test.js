function map(arr, fun) {
  for (const i of Object.keys(arr)) {
    arr[i] = fun(arr[i]);
  }
  return arr;
}

describe("function map", () => {
  describe("si la función some recibe [1,2,3] y la función (x => x ** 2)", () => {
    test("entonces retorna [1,4,9]", () => {
      const arr = [1, 2, 3];
      const fun = (num) => num ** 2;
      const expected = [1, 4, 9];

      const result = map(arr, fun);

      expect(result).toEqual(expected);
    });
  });
});
