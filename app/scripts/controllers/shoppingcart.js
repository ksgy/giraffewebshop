'use strict';

/**
 * @ngdoc function
 * @name giraffeWebshopApp.controller:ShoppingcartCtrl
 * @description
 * # ShoppingcartCtrl
 * Controller of the giraffeWebshopApp
 */
angular.module('giraffeWebshopApp')
  .controller('ShoppingcartCtrl', function (shoppingCart) {
    this.items = shoppingCart.getCartContents();
  });
