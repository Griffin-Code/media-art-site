'use strict';

/**
 * @ngdoc overview
 * @name mediaArtProjectApp
 * @description
 * # mediaArtProjectApp
 *
 * Main module of the application.
 */
angular
  .module('mediaArtProjectApp', [
    'ngAnimate',
    'ngAria',
    'ngRoute',
    'ngTouch'
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
      .otherwise({
        redirectTo: '/'
      });
  });
