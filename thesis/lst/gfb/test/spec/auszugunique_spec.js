beforeEach(inject(function ($filter) {
    uniqueFilter = $filter("unique");
}));
 
it("should return an empty array given a null input-array", function () {
    expect(uniqueFilter(null, 0)).to.deep.equal([]);
});