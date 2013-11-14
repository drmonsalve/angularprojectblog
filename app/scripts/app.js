'use strict';

angular.module('angularApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.ace'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/ace', {
        templateUrl: 'views/ace.html',
        controller: 'AceCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
