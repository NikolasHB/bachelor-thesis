var testApp = angular.module("testApp", []);

testApp.controller("TestCtrl", function($scope) {
	$scope.someModelName = "Welt";

	$scope.setName = function() {
		$scope.someModelName = "Neue" + $scope.someModelName;
	}
});