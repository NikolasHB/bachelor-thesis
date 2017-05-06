describe("Sample Test", function() { //Suite
	it("should add integers correctly", function() { //Spec #1
		var result = 13 + 2;

		expect(result).toBe(15); //Expectation
	});

	it("should compare e and pi correctly", function() { //Spec #2
		var e = 2.78;
		var pi = 3.1416;

		expect(e).toBeLessThan(pi); //Expectation #1
		expect(pi).not.toBeLessThan(e); //Expectation #2
	})
})