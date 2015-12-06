'use strict';

/**
 * @ngdoc function
 * @name giraffeWebshopApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the giraffeWebshopApp
 */
angular.module('giraffeWebshopApp')
  .controller('CartCtrl', function (shoppingCart) {

    this.items = shoppingCart.getCartContents();

    this.remove = shoppingCart.removeItem;

  });
