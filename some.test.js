function some(arr, fun) {
  let bool;

  for (let i of arr) {
    if (fun(i)) {
      return true;
    }
  }

  return false
}

describe("function add", function () {

	describe("function add", function () {

		test("when function fun receives 2 and 3, returns 5", function() {
	
			//Arrange
			const n1 = 2;
			const n2 = 3;
			const expected = 5;
	
			//Act
			const result = add(n1, n2);
	
			//Assert
			expect(result).toBe(expected)

		});

 });

}
