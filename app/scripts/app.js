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
    'ngTouch',
  ])
  .constant('_', window._)
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
  })
  .run(function (_, $rootScope, $interval) {
    function updateCarousels() {
      _.forEach($rootScope.carousels, function (val, key) {
        if (typeof $rootScope.$carousel[key] !== 'number') {
          $rootScope.$carousel[key] = -1;
        }
      });
      _.forEach($rootScope.$carousel, function (val, key) {
        $rootScope.$carousel[key] = val+1 >= $rootScope.carousels[key].length ? 0 : val+1;
      });
    }
    $rootScope.$carousel = {};

    $rootScope.carousels = {
      main: [
        {
          title: 'Slide 1',
          img: 'http://media.gettyimages.com/photos/bundles-of-illuminated-optical-fibres-used-to-carry-high-volumes-of-picture-id578460429',
          desc: 'This is the first slide in the set'
        },
        {
          title: 'Slide 2',
          img: 'http://media.gettyimages.com/photos/-picture-id533596181',
          desc: 'This is the second slide in the set'
        }
      ]
    };

    $interval(updateCarousels, 10000);
    updateCarousels();
  });
