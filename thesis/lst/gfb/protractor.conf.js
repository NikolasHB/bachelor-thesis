exports.config = {
  framework: 'mocha',
  capabilities: {
    'browserName': 'internet explorer'
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['test/e2e/**/*_spec.js'],
  mochaOpts: {
    enableTimeouts: false
  }, 
};