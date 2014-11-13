angular.module('MainApp.controllers', ['ngResource']).controller('MainController', ['$scope', '$resource', function ($scope, $resource) {
  'use strict';

  var Comment = $resource('/api/comments/:id', {
    id: '@_id'
  });

  // query()
  Comment.query(function (comments) {
    console.log('Comment.query()');
    console.log(prettyJSON(comments));
    $scope.comments = comments;
  });

  // get()
  Comment.get({id: 123}, function (comment) {
    console.log('Comment.get()');
    console.log(prettyJSON(comment));
    $scope.comment = comment;
  });

  // $save()
  Comment.get({id: 555}, function (comment) {
    console.log('Comment.$save()');
    comment.modified = true;
    comment.name = 'Ice King';
    $scope.$save = comment.$save();
  });

  // save()
  Comment.save({id: 232, name: 'Finn'}, function (comment) {
    console.log('Comment.save()');
    console.log(prettyJSON(comment));
    $scope.save = comment;
  });

  // $remove()
  Comment.get({id: 555}, function (comment) {
    console.log('Comment.$remove()');
    $scope.$remove = comment.$remove();
  });

  // remove()
  Comment.remove({id: 94103}, function (comment) {
    console.log('Comment.remove()');
    console.log(prettyJSON(comment));
    $scope.remove = comment;
  });
}]);

function prettyJSON(data) {
  return JSON.stringify(data, null, 2);
}
