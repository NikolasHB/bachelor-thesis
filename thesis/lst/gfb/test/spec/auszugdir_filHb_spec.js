describe("given a not numerical value", function () {
    it("should set input class to EingabefeldEinzeile,ng-invalid-input and alert", function () {
        var el = getCompiledDirective();

        var setAttributeSpy = sinonSandbox.spy();
        var alertSpy = sinonSandbox.spy(window, "alert");
        var eventDummy = { srcElement: { value: "abc", setAttribute: setAttributeSpy } };

        el.isolateScope().myBlur(eventDummy);

        expect(setAttributeSpy.calledWith("class", "EingabefeldEinzeile")).to.be.true;
        expect(setAttributeSpy.calledWith("class", "EingabefeldEinzeile ng-invalid-input")).to.be.true;
        expect(alertSpy.called).to.be.true;
    });
});

 function getCompiledDirective() {
    var el = $compile('<filhb myfilhb="filHb" my-tooltip-input="TT" my-tooltip-button="TT2"></filhb>')(scope);
    return el;
}