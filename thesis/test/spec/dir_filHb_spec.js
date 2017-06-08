describe("dir_filHb", function () {
    var $compile, $rootScope;
    var scope;
    var sinonSandbox;

    beforeEach(module("CBGFD"));
    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        scope = $rootScope.$new();
        scope.filhb = '';
    }));
    beforeEach(function () {
        sinonSandbox = sinon.sandbox.create();
    });

    afterEach(function () {
        sinonSandbox.restore();
    })

    it("should replace the element with an input and a button", function () {
        var el = getCompiledDirective();
        scope.$digest();
        expect(el.html()).to.contain("input");
        expect(el.html()).to.contain("button");
    });

    describe("given an empty value", function () {
        it("should set input class to EingabefeldEinzeile and not alert", function () {
            var el = getCompiledDirective();

            var setAttributeSpy = sinonSandbox.spy();
            var alertSpy = sinonSandbox.spy(window, "alert");
            var eventDummy = { srcElement: { value: "", setAttribute: setAttributeSpy } };

            el.isolateScope().myBlur(eventDummy);

            expect(setAttributeSpy.calledWith("class", "EingabefeldEinzeile")).to.be.true;
            expect(setAttributeSpy.calledOnce).to.be.true;
            expect(alertSpy.called).to.be.false;
        });
    });

    describe("given an valid value", function () {
        it("should set input class to EingabefeldEinzeile and not alert", function () {
            var el = getCompiledDirective();

            var setAttributeSpy = sinonSandbox.spy();
            var alertSpy = sinonSandbox.spy(window, "alert");
            var eventDummy = { srcElement: { value: "11111", setAttribute: setAttributeSpy } };

            el.isolateScope().myBlur(eventDummy);

            expect(setAttributeSpy.calledWith("class", "EingabefeldEinzeile")).to.be.true;
            expect(setAttributeSpy.calledOnce).to.be.true;
            expect(alertSpy.called).to.be.false;
        });

        it("should set input class to EingabefeldEinzeile and not alert", function () {
            var el = getCompiledDirective();

            var setAttributeSpy = sinonSandbox.spy();
            var alertSpy = sinonSandbox.spy(window, "alert");
            var eventDummy = { srcElement: { value: "99999", setAttribute: setAttributeSpy } };

            el.isolateScope().myBlur(eventDummy);

            expect(setAttributeSpy.calledWith("class", "EingabefeldEinzeile")).to.be.true;
            expect(setAttributeSpy.calledOnce).to.be.true;
            expect(alertSpy.called).to.be.false;
        });

        it("should set input class to EingabefeldEinzeile and not alert", function () {
            var el = getCompiledDirective();

            var setAttributeSpy = sinonSandbox.spy();
            var alertSpy = sinonSandbox.spy(window, "alert");
            var eventDummy = { srcElement: { value: "00000", setAttribute: setAttributeSpy } };

            el.isolateScope().myBlur(eventDummy);

            expect(setAttributeSpy.calledWith("class", "EingabefeldEinzeile")).to.be.true;
            expect(setAttributeSpy.calledOnce).to.be.true;
            expect(alertSpy.called).to.be.false;
        });
    });

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

    describe("given a wrong formatted numerical value", function () {
        it("should set input class to EingabefeldEinzeile,ng-invalid-input and alert (value too long)", function () {
            var el = getCompiledDirective();

            var setAttributeSpy = sinonSandbox.spy();
            var alertSpy = sinonSandbox.spy(window, "alert");
            var eventDummy = { srcElement: { value: "123456", setAttribute: setAttributeSpy } };

            el.isolateScope().myBlur(eventDummy);

            expect(setAttributeSpy.calledWith("class", "EingabefeldEinzeile")).to.be.true;
            expect(setAttributeSpy.calledWith("class", "EingabefeldEinzeile ng-invalid-input")).to.be.true;
            expect(alertSpy.called).to.be.true;
        });

        it("should set input class to EingabefeldEinzeile,ng-invalid-input and alert (value too short)", function () {
            var el = getCompiledDirective();

            var setAttributeSpy = sinonSandbox.spy();
            var alertSpy = sinonSandbox.spy(window, "alert");
            var eventDummy = { srcElement: { value: "1234", setAttribute: setAttributeSpy } };

            el.isolateScope().myBlur(eventDummy);

            expect(setAttributeSpy.calledWith("class", "EingabefeldEinzeile")).to.be.true;
            expect(setAttributeSpy.calledWith("class", "EingabefeldEinzeile ng-invalid-input")).to.be.true;
            expect(alertSpy.called).to.be.true;
        });

        it("should set input class to EingabefeldEinzeile,ng-invalid-input and alert (value negative)", function () {
            var el = getCompiledDirective();

            var setAttributeSpy = sinonSandbox.spy();
            var alertSpy = sinonSandbox.spy(window, "alert");
            var eventDummy = { srcElement: { value: "-12345", setAttribute: setAttributeSpy } };

            el.isolateScope().myBlur(eventDummy);

            expect(setAttributeSpy.calledWith("class", "EingabefeldEinzeile")).to.be.true;
            expect(setAttributeSpy.calledWith("class", "EingabefeldEinzeile ng-invalid-input")).to.be.true;
            expect(alertSpy.called).to.be.true;
        });

        it("should set input class to EingabefeldEinzeile,ng-invalid-input and alert (value is decimal)", function () {
            var el = getCompiledDirective();

            var setAttributeSpy = sinonSandbox.spy();
            var alertSpy = sinonSandbox.spy(window, "alert");
            var eventDummy = { srcElement: { value: "123.4", setAttribute: setAttributeSpy } };

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
});