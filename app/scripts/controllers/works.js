'use strict';

/**
 * @ngdoc function
 * @name mediaArtProjectApp.controller:WorksCtrl
 * @description
 * # WorksCtrl
 * Controller of the mediaArtProjectApp
 */
angular.module('mediaArtProjectApp')
  .controller('WorksCtrl', function ($scope) {
    $scope.studentWorks = [
      {
        title: 'Sample Work 1',
        desc: 'This is the first student work placeholder',
        project: 'Project Name',
        author: 'Student Name',
        img: 'http://placehold.it/300x200'
      },
      {
        title: 'Sample Work 2',
        desc: 'This is the next student work placeholder',
        project: 'Project Name',
        author: 'Student Name',
        img: 'http://placehold.it/300x200'
      },
      {
        title: 'Sample Work 3',
        desc: 'This is the third student work placeholder',
        project: 'Project Name',
        author: 'Student Name',
        img: 'http://placehold.it/300x200'
      }
    ];
  });
