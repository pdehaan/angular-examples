angular.module('MainApp.controllers', [])
  .controller('MainCtrl', function ($scope, $rootScope, TITLE, LINKS) {
    'use strict';

    $rootScope.TITLE = TITLE; // global constant
    $rootScope.LINKS = LINKS; // global constant

    $scope.lead = 'This is my content from my controller.';
  });
