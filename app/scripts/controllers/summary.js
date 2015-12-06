'use strict';

/**
 * @ngdoc function
 * @name giraffeWebshopApp.controller:SummaryCtrl
 * @description
 * # SummaryCtrl
 * Controller of the giraffeWebshopApp
 */
angular.module('giraffeWebshopApp')
  .controller('SummaryCtrl', function (shoppingCart) {
    this.items = shoppingCart.getCartContents();
    this.getTotalPrice = shoppingCart.getTotalPrice;
  });
