module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [
      'src/ext/jquery/jquery.js',
      'src/ext/jquery/*.js',
      'src/ext/angularjs/angular.min.js',
      'src/ext/angularjs/**/*.js',
      'src/ext/bootstrap/js/ui-bootstrap-tpls-0.12.0.min.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/app.js',
      'src/ext/*.js',
      'src/directives/*.js',
      'src/*.js',
      'test/spec/**/*_spec.js'
    ],
    exclude: ['src/ext/angularjs/angular-sanitize.min.js', 'src/gruppenlogik*.js'],
    preprocessors: { 'src/ext/*.js': ['coverage'], 'src/*.js': ['coverage'], 'src/directives/*.js': ['coverage'] },
    reporters: ['mocha', 'coverage'],
    browsers: ['IE_no_addons'],
    concurrency: Infinity,
    autoWatch: true,
    singleRun: false,
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,

    customLaunchers: {
      IE_no_addons: {
        base: 'IE',
        flags: ['-extoff']
      }
    },
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'lcov', subdir: 'lcov' }
      ]
    }
  })
}
