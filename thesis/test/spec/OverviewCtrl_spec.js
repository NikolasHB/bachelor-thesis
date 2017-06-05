describe("OverviewCtrl", function() {
    var $controller, $rootScope;
    var sandbox;
    
    beforeEach(module("CBGFD"));
    beforeEach(inject(function(_$controller_, _$rootScope_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
    }));
    beforeEach(function() {
        sandbox = sinon.sandbox.create();
    });
    afterEach(function() {
        sandbox.restore();
    });


    describe("$scope.validatebegehungsdatum", function() {
        var initialData;
        beforeEach(inject(function(cls_gefahrenbeurteilung) {
            initialData = {initialGefaehrdung: new cls_gefahrenbeurteilung()};
        }));

        it("should exist", inject(function() {
            var $scope = $rootScope.$new();
            var ctrl = $controller("OverviewCtrl", {$scope: $scope, initialData: initialData});

            expect($scope.validatebegehungsdatum).to.be.defined;
        }));

        it("should return true given an undefined gefahrenbeurteilung", function() {
            var $scope = $rootScope.$new();
            var ctrl = $controller("OverviewCtrl", {$scope: $scope, initialData: initialData});
            $scope.gefahrenbeurteilung = undefined;

            expect($scope.validatebegehungsdatum()).to.be.true;
        });

        it("should return false given gfbTyp 'Begehung' and begehungsdatum null", function() {
            var $scope = $rootScope.$new();
            var ctrl = $controller("OverviewCtrl", {$scope: $scope, initialData: initialData});
            $scope.gefahrenbeurteilung = {mitarbeiterrolle:{gfbTyp:'Begehung'}, begehungsdatum:null};

            expect($scope.validatebegehungsdatum()).to.be.false;
        });

        it("should return false given gfbTyp 'Begehung' and undefined begehungsdatum", function() {
            var $scope = $rootScope.$new();
            var ctrl = $controller("OverviewCtrl", {$scope: $scope, initialData: initialData});
            $scope.gefahrenbeurteilung = {mitarbeiterrolle:{gfbTyp:'Begehung'}, begehungsdatum:undefined};

            expect($scope.validatebegehungsdatum()).to.be.false;
        });
        
        it("should return true given a gfbTyp other than 'Begehung'", function() {
            var $scope = $rootScope.$new();
            var ctrl = $controller("OverviewCtrl", {$scope: $scope, initialData: initialData});
            $scope.gefahrenbeurteilung = {mitarbeiterrolle:{gfbTyp:''}};

            expect($scope.validatebegehungsdatum()).to.be.true;
        });
        
        it("should return true given a not-undefend and not-null begehungsdatum", function() {
            var $scope = $rootScope.$new();
            var ctrl = $controller("OverviewCtrl", {$scope: $scope, initialData: initialData});
            $scope.gefahrenbeurteilung = {mitarbeiterrolle:{}, begehungsdatum:''};

            expect($scope.validatebegehungsdatum()).to.be.true;
        });
    })
});