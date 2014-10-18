# $routeProvider test

The following example shows how you can do client side routing in Angular using a `$routeProvider`, `ng-view`, and _angular-route.js_.

## Prerequisites

Install `angular` and `angular-route` using Bower (or download them directly).
```sh
$ bower install angular angular-route -S
```

Optional: Install Bootstrap using `bower install bootstrap -S`.

## index.html

The _index.html_ template is the main file for the whole app. We define our base site `href` using the `<base>` tag, define our site navigation and main `ng-view`, and include our angular libraries and main script, _scripts/app.js_.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <base href="/" />
  <title>$routeProvider test</title>
</head>
<body ng-app="MyApp">

  <div class="container">
    <nav>
      <ul class="nav nav-pills">
        <li><a href="/">Home</a></li>
        <li><a href="foo">Foo</a></li>
        <li><a href="bar">Bar</a></li>
        <li><a href="bar/3">Bar/3</a></li>
        <li><a href="404">404</a></li>
      </ul>
    </nav>

    <div ng-view></div>
  </div>

  <script src="bower_components/angular/angular.min.js"></script>
  <script src="bower_components/angular-route/angular-route.min.js"></script>
  <script src="scripts/app.js"></script>

</body>
</html>
```

## scripts/app.js

The _app.js_ file defines our main app module, `MyApp`, and lists `ngRoute` module as a dependency. Next we define a `config()` with a `$routeProvider` which defines the route handlers for "/", "/foo", and "/bar" (which takes an optional parameter, `id`). If no routes match, we redirect to the "/" route. Finally we define our controllers for the three routes and define a few parameters on the `$scope` variable.

```js
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
```

## views/home.html

```html
<h1>{{ title }}</h1>

<p>I am the home page.</p>
```

## views/foo.html

```html
<h1>{{ title | uppercase }}</h1>

<p>This is the <kbd>/foo</kbd> route</p>
```

## views/bar.html

```html
<h1>{{ title }} <small>(id: {{ params.id || "(undefined)" }})</small></h1>

<section>
  <p>This is amazing!</p>
</section>
```

Earlier, in the _/app.js_ file, we defined the "/bar" route as `'/bar/:id?'` (with a trailing "?" on the `id` argument, which sets the `id` argument as optional). We can retrieve the value of the `id` argument by getting it's value from the `$routeParams` controller argument, as seen in the following snippet. In this case we pass the `$routeParams` object directly to the `$scope.params` variabe.

```js
controller('BarController', function ($scope, $routeParams) {
  $scope.title = 'Bar';
  $scope.params = $routeParams;
})
```

We display the value `id` argument in the _views/bar.html_ template using the following snippet, `{{ params.id || "(undefined)" }}`. If the optional parameter exists, the value of `params.id` is displayed, otherwise the "(undefined)" string is displayed.
