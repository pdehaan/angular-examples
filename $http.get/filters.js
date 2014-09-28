angular.module("app")
  .filter("doubled", function () {
    return function (value) {
      return value * 2;
    };
  });
