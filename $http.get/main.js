angular.module("app", ["MoreFilters"])
  .controller("AppCtrl", function ($scope, $http) {
    $http.get("data.json").success(function (data) {
      $scope.users = data;
    }).error(function (err) {
      console.error(err);
    });
  });
