'use strict';

/**
 * @ngdoc overview
 * @name giraffeWebshopApp
 * @description
 * # giraffeWebshopApp
 *
 * Main module of the application.
 */
angular
  .module('giraffeWebshopApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/giraffes', {
        templateUrl: 'views/giraffes.html',
        controller: 'GiraffesCtrl',
        controllerAs: 'giraffes'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
