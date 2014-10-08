'use strict';

angular.module('app', []).factory('ResultsService', ['$http', function ($http) {
  var getResults = function (active, count) {
    active = !!active ? 'active' : 'inactive';
    count = Math.min(parseInt(count, 10), 30);

    // Example: "data/inactive.json"
    var API_URL = ['data', active + '.json'].join('/');
    console.log('%s?%d', API_URL, count);

    return $http.get(API_URL).error(function (err) {
      console.error(err);
    });
  };
  return {
    getActiveResults: function () {
      return getResults(true, 30);
    },
    getInactiveResults: function (count) {
      return getResults(false, count);
    }
  };
}]).controller('ResultController', ['$scope', 'ResultsService', function ($scope, ResultsService) {
  ResultsService.getActiveResults().success(function (data) {
    $scope.activeResults = data;
  });
  ResultsService.getInactiveResults(10).success(function (data) {
    $scope.inactiveResults = data;
  });
}]).directive('activeResults', function () {
  return partial('E', '_activeResults.html');
}).directive('inactiveResults', function () {
  return partial('E', '_inactiveResults.html');
});

function partial(restrict, url) {
  return {
    restrict: restrict,
    templateUrl: 'partials/' + url
  };
}
