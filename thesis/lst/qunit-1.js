QUnit.module("group a");
QUnit.test("a basic test example", function(assert) {
 	assert.ok(true, "this test is fine");
});
QUnit.test("a basic test example 2", function(assert) {
 	var sum = 1 + 2;
 	assert.equal(sum, 3, "sum equals 3");
});