describe("A test suite", function () {
    beforeEach(function () { });
    afterEach(function () { });
    it('should succeed', function () { expect(true).to.be.true; });
    it('should verify Sinon is working', function () {
        callback = sinon.spy();
        callCallback(callback);
        expect(callback.calledOnce).to.be.true;
    })
});

function callCallback(callback) {
    callback();
}