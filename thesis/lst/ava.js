import test from 'ava';

test(t => {
	var testObject = [1, 2];
	t.deepEqual(testObject, [1, 2]);
});