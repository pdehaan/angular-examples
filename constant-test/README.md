# AngularJS `constant()` test


## Prerequisites:

1. Install [Bower](http://bower.io/), if not already installed: `$ npm install bower -g`
2. Install [AngularJS](https://angularjs.org/) and [Bootstrap](http://getbootstrap.com/): `$ bower install angular bootstrap -S`

## index.html

First we create our _index.html_ file and include the _bootstrap.min.css_ stylesheet and _angular.min.js_ script. We also set our `ng-app` and `ng-controller` attributes and set up a few bindings.

```html
<!doctype html>
<html lang="en" ng-app="MainApp">
<head>
  <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css" />
  <title ng-bind="TITLE"></title>
</head>
<body>

  <div class="container" ng-controller="MainCtrl">
    <nav>
      <ul class="nav nav-pills">
        <li ng-repeat="(label, href) in LINKS">
          <a ng-href="{{ href }}">{{ label }}</a>
        </li>
      </ul>
    </nav>
    <hr />
    <h1>{{ TITLE }}</h1>
    <p class="lead">{{ lead }}</p>
  </div>

  <script src="bower_components/angular/angular.min.js"></script>
  <script src="app.js"></script>
  <script src="constants.js"></script>
  <script src="controllers.js"></script>

</body>
</html>
```

## app.js

The _app.js_ file defines our main module, `MainApp`, and defines the `MainApp.constants` and `MainApp.controllers` as dependencies.

```js
angular.module('MainApp', [
  'MainApp.constants',
  'MainApp.controllers'
]);
```

## constants.js

The _constants.js_ file defines two constants, `TITLE` (a String) and `LINKS` (an Object):

```js
angular.module('MainApp.constants', [])
  .constant('TITLE', 'Fun with Constants')
  .constant('LINKS', {
    Home: '#/',
    About: '#/about',
    'Contact Us': '#/contact'
  });
```

## controllers.js

The _controllers.js_ file defines our controller, `MainCtrl`, and imports our `TITLE` and `LINKS` global constants and sets them both in the `$rootScope` (which allows us to bind values outside of the `MainCtrl` controller, the `<title></title>` tag, in this case). Finally we define a new local `$scope` variable, `lead`:

```js
angular.module('MainApp.controllers', [])
  .controller('MainCtrl', function ($scope, $rootScope, TITLE, LINKS) {
    $rootScope.TITLE = TITLE; // global constant
    $rootScope.LINKS = LINKS; // global constant

    $scope.lead = 'This is my content from my controller.';
  });
```
