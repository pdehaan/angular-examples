'use strict';

angular.module('app').controller('MainController', function ($scope) {
  $scope.startDate = new Date(2014, 1, 28); // Feb 28
  $scope.endDate = new Date(2014, 3, 30); // Apr 30

  $scope.minVal = 7;
  $scope.maxVal = 19;
});
