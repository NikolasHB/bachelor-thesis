describe("cls_betriebsratsbereich", function() {
    var betriebsratsbereich;
    var sandbox;

    beforeEach(module("CBGFD"));
    beforeEach(inject(function(svc_sp, cls_betriebsratsbereich) {
        betriebsratsbereich = new cls_betriebsratsbereich(svc_sp);
    }));
    beforeEach(function() {
        sandbox = sinon.sandbox.create();
    });
    afterEach(function() {
        sandbox.restore();
    })

    it("should be initialised with correct values", inject(function(svc_sp, cls_betriebsratsbereich) {
        expect(betriebsratsbereich.sp_id).to.equal(-1);
        expect(betriebsratsbereich.title).to.equal("");
        expect(betriebsratsbereich.sortierung).to.equal(0);
    }));

    describe("loadfromxmlitem", function() {
        it("should fill the fields with values from the xmlItem", function() {
            var xmlItem = {attr: sinon.stub()};
            xmlItem.attr.withArgs("ows_ID").returns(42);
            xmlItem.attr.withArgs("ows_Title").returns("Test");
            xmlItem.attr.withArgs("ows_Sortierung").returns(1);
            betriebsratsbereich.loadfromxmlitem(xmlItem);

            expect(betriebsratsbereich.sp_id).to.equal(42);
            expect(betriebsratsbereich.title).to.equal("Test");
            expect(betriebsratsbereich.sortierung).to.equal(1);
        });

        it("should set field id to undefined given a xmlItem with missing attribute ows_ID", function() {
            var xmlItem = {attr: sinon.stub()};
            //xmlItem.attr.withArgs("ows_ID").returns(42);
            xmlItem.attr.withArgs("ows_Title").returns("Test");
            xmlItem.attr.withArgs("ows_Sortierung").returns(1);
            betriebsratsbereich.loadfromxmlitem(xmlItem);

            expect(betriebsratsbereich.sp_id).to.equal(undefined);
            expect(betriebsratsbereich.title).to.equal("Test");
            expect(betriebsratsbereich.sortierung).to.equal(1);
        });

        it("should leave field title blank given a xmlItem with missing attribute ows_Title", function() {
            var xmlItem = {attr: sinon.stub()};
            xmlItem.attr.withArgs("ows_ID").returns(42);
            //xmlItem.attr.withArgs("ows_Title").returns("Test");
            xmlItem.attr.withArgs("ows_Sortierung").returns(1);
            betriebsratsbereich.loadfromxmlitem(xmlItem);

            expect(betriebsratsbereich.sp_id).to.equal(42);
            expect(betriebsratsbereich.title).to.equal("");
            expect(betriebsratsbereich.sortierung).to.equal(1);
        });

        it("should set field sortierung to -1 blank given a xmlItem with missing attribute ows_Sortierung", function() {
            var xmlItem = {attr: sinon.stub()};
            xmlItem.attr.withArgs("ows_ID").returns(42);
            xmlItem.attr.withArgs("ows_Title").returns("Test");
            //xmlItem.attr.withArgs("ows_Sortierung").returns(1);
            betriebsratsbereich.loadfromxmlitem(xmlItem);

            expect(betriebsratsbereich.sp_id).to.equal(42);
            expect(betriebsratsbereich.title).to.equal("Test");
            expect(betriebsratsbereich.sortierung).to.equal(-1);
        });
    })
})