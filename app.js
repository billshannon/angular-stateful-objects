angular.module('myApp', [])
    .controller('CarWashController', function ($scope) {

        $scope.finishedCars = [];

        $scope.moveToWash = function() {
            $scope.washCar = $scope.newCar;
            $scope.newCar = {};
        }

        $scope.moveToPolish = function() {
            $scope.polishCar = $scope.washCar;
            $scope.washCar = {};
        }

        $scope.carFinished = function() {
            $scope.finishedCar = $scope.polishCar;
            $scope.finishedCars.push($scope.finishedCar);
            $scope.polishCar = {};
        }
    });