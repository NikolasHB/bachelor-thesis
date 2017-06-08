describe("uniqueFilter", function () {
    var uniqueFilter;
 
    beforeEach(module("CBGFD"));
    beforeEach(inject(function ($filter) {
        uniqueFilter = $filter("unique");
    }));
 
    it("should return an empty array given a null input-array", function () {
        expect(uniqueFilter(null, 0)).to.deep.equal([]);
    });
 
    it("should return an empty array given an empty input-array", function () {
        expect(uniqueFilter([], 0)).to.deep.equal([]);
    });
 
    it("should return the same array given an array with only 1 entry", function () {
        expect(uniqueFilter([[42]], 0)).to.deep.equal([[42]]);
    });
 
    it("should return the same array given an array with 2 different entries", function () {
        expect(uniqueFilter([[42], [1]], 0)).to.deep.equal([[42], [1]]);
    });
 
    it("should remove the doubled value given an array with 2 matching entries", function () {
        expect(uniqueFilter([[42], [1], [42]], 0)).to.deep.equal([[42], [1]]);
    });
 
    it("should remove the doubled value given an array with 2 different entries but the key is the same", function () {
        expect(uniqueFilter([[42, 1], [1, 1], [42, 2]], 0)).to.deep.equal([[42, 1], [1, 1]]);
    })
});