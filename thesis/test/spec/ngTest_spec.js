describe("A ngMock test suite", function () {
    var $filter;

    beforeEach(module("CBGFD"));
    beforeEach(inject(function (_$filter_) {
        $filter = _$filter_;
    }));

    it("should have a defined $filter factory", function () {
        expect($filter).to.exist;
    });

    it("should resolve a defined filter", function () {
        var unique = $filter("unique");
        expect(unique).to.exist;
    });

    it("should inject a service", inject(function (svc_ai) {
        expect(svc_ai).to.exist;
    }));
});