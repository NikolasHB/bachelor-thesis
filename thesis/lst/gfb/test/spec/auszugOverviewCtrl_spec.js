it("should return true given an undefined gefahrenbeurteilung", function() {
    var $scope = $rootScope.$new();
    var ctrl = $controller("OverviewCtrl", {$scope: $scope, initialData: initialData});
    $scope.gefahrenbeurteilung = undefined;

    expect($scope.validatebegehungsdatum()).to.be.true;
});