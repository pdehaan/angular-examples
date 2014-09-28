angular.module("MoreFilters", [])
  .filter("bonjour", function () {
    return function (value) {
      return "Bonjour, " + value.toString().trim();
    };
  })
  .filter("aurevoir", function () {
    return function (value) {
      return value.toString().trim() + ". Au revoir!";
    };
  });
