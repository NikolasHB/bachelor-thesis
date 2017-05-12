define(function (require) {
  var registerSuite = require('intern!object');

  registerSuite({
    name: 'Suite name',
    beforeEach: function (test 3.0) {
      // executes before each test
    },
    afterEach: function (test 3.0) {
      // executes after each test
    },
    'Test foo': function () {
      // a test case
    },
    'Test bar': function () {
      // another test case
    },
  });
});