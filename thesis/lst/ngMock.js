describe('SimpleService', function() {
	var SimpleService, $log;

	beforeEach(module('app')); //load the module under test

	it('should log the message "something done!"', inject(function(SimpleService, $log) {
		sinon.spy($log, 'info');
		SimpleService.doSomething();
		assert($log.info.calledOnce);
		assert($log.info.calledWith('something done!'));
		$log.info.restore();
	}));
});