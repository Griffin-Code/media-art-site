'use strict';

/**
 * @ngdoc function
 * @name mediaArtProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mediaArtProjectApp
 */
angular.module('mediaArtProjectApp')
  .controller('MainCtrl', function ($scope) {
    $scope.frontContent = [
      {
        title: 'Modern Design',
        body: 'Create designs from simple personal logos to the teachings of Bauhaus. Clean, flat, and straight-forward graphics that deliver a clear and concise message to the viewer.',
        img: 'http://placehold.it/300x200',
        link: 'modern'
      },
      {
        title: 'Abstract Thought',
        body: 'Surreal or abstract designs created using the power of computer image processing. Mix and match existing images using Adobe Photoshop to form new (and somewhat confusing) patterns, designs, or works',
        img: 'http://placehold.it/300x200',
        link: 'abstract'
      },
      {
        title: 'Hands-On Experience',
        body: 'Work differently than a standarized art class: learn by doing. Understand works and concepts by attempting to replicate and adapt; try a hand at some of the different forms and styles available.',
        img: 'http://placehold.it/300x200',
        link: 'hands-on'
      }
    ];
  });
