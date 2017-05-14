it('calls the original function', function () {
    var callback = sinon.spy();
    var proxy = callFunction(callback);

    proxy();

    assert(callback.called);
});