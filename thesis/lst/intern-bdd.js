define(function (require) {
  var bdd = require('intern!bdd');

  bdd.describe('the thing being tested', function () {
    bdd.beforeEach(function () {
      // executes before each test
    });
    bdd.afterEach(function () {
      // executes after each test
    });
    bdd.it('should do foo', function () {
      // a test case
    });
    bdd.it('should do bar', function () {
      // another test case
    });
  });
});