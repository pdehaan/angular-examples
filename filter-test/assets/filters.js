'use strict';

angular.module('app').filter('datestr', function () {
  return function (startDate) {
    return startDate.toString().toUpperCase();
  };
}).filter('datediff', function () {
  return function (startDate, endDate) {
    return endDate - startDate;
  };
}).filter('fromNow', function () {
  return function (date) {
    return moment(date).fromNow();
  };
}).filter('humanizeDuration', function () {
  return function (date) {
    date = Math.round(date / 1000) * 1000;
    return humanizeDuration(date);
  };
});
