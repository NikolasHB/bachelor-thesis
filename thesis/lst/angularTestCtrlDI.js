someModule.controller("MyController", ["$scope", "$http", "dep", function($scope, $http, dep) {
	$scope.aMethod = function() {
		dep.someFunction();
		//...
	}
});