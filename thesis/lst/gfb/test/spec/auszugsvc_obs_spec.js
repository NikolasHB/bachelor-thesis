beforeEach(inject(function(svc_sp, cls_betriebsratsbereich) {
    betriebsratsbereich = new cls_betriebsratsbereich(svc_sp);
}));
    
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