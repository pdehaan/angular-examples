angular.module('app', [])
  .controller('TableController', ['$scope', '$http', function ($scope, $http) {
    $http.get('data.json').success(function (data) {
      $scope.results = data;
    }).error(function (err) {
      console.log('Error: %s', err);
    });
  }]).directive('tableHead', function () {
    return {
      restrict: 'A',
      templateUrl: 'partials/_table-head.html'
    };
  }).directive('tableBody', function () {
    return {
      restrict: 'A',
      templateUrl: 'partials/_table-body.html'
    };
  }).directive('adventureTable', function () {
    return {
      restrict: 'E',
      templateUrl: 'partials/_adventure.html'
    };
  });
