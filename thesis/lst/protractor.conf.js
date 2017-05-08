exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['js/e2e/**/*.js'],
  multiCapatibilities: [
  	{browserName: 'firefox'},
  	{browserName: 'chrome'}
  ]
}