'use strict';

/**
 * @ngdoc service
 * @name giraffeWebshopApp.Giraffes
 * @description
 * # Giraffes
 * Service in the giraffeWebshopApp.
 */
angular.module('giraffeWebshopApp')
  .service('Giraffes', function ($q, $timeout) {

    var giraffes = [
      {
        id: 1,
        name: 'West African Giraffe',
        description: 'They are also called the Nigerian Giraffe due to the fact that is where most of them are found.',
        price: 400
      },
      {
        id: 2,
        name: 'Somali Giraffe',
        description: 'The Giraffa camelopardalis reticulata is the one most often found in zoos around the world',
        price: 200
      },
      {
        id: 3,
        name: 'Masai Giraffe',
        description: 'They are also called the Nigerian Giraffe due to the fact that is where most of them are found.',
        price: 1337
      },
      {
        id: 4,
        name: 'East African giraffe',
        description: 'They are living in East Africa',
        price: 404
      },
      {
        id: 5,
        name: 'Rothschild Giraffe',
        description: 'They can also weight about 2,800 pounds with the males weighing more than the females by several hundred pounds.',
        price: 301
      }
    ];

    var getGiraffes = function(){
      var d = $q.defer();

      $timeout(function(){
        d.resolve(giraffes);
      }, 50);

      return d.promise;
    };

    var api = {
      getGiraffes: getGiraffes
    };

    return api
  });
