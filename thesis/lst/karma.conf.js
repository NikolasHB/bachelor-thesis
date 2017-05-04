module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
    	'build/js/**/*.js',
    	'build/js/**/*.test.js'
    ],
    browsers: ['Firefox']
  });
};