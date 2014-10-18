'use strict';

angular.module('MyApp', ['ngRoute']).config(function ($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/home.html',
    controller: 'HomeController'
  }).when('/foo', {
    templateUrl: 'views/foo.html',
    controller: 'FooController'
  }).when('/bar/:id?', {
    templateUrl: 'views/bar.html',
    controller: 'BarController'
  }).otherwise({
    redirectTo: '/'
  });

  $locationProvider.html5Mode(true);
}).controller('HomeController', function ($scope) {
  $scope.title = 'Home';
}).controller('FooController', function ($scope) {
  $scope.title = 'Foo';
}).controller('BarController', function ($scope, $routeParams) {
  $scope.title = 'Bar';
  $scope.params = $routeParams;
});
