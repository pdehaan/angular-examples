angular.module('app', [])
  .controller('TableController', ['$scope', '$http', function ($scope, $http) {
    $http.get('data.json').success(function (data) {
      $scope.results = data;
    }).error(function (err) {
      console.log('Error: %s', err);
    });
  }]);
