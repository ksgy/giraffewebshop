'use strict';

/**
 * @ngdoc function
 * @name giraffeWebshopApp.controller:ThankyouCtrl
 * @description
 * # ThankyouCtrl
 * Controller of the giraffeWebshopApp
 */
angular.module('giraffeWebshopApp')
  .controller('ThankyouCtrl', function (shoppingCart) {
    shoppingCart.clearItems();
  });
