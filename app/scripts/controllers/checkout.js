'use strict';

/**
 * @ngdoc function
 * @name giraffeWebshopApp.controller:CheckoutCtrl
 * @description
 * # CheckoutCtrl
 * Controller of the giraffeWebshopApp
 */
angular.module('giraffeWebshopApp')
  .controller('CheckoutCtrl', function (shoppingCart) {
    this.items = shoppingCart.getCartContents();
    this.selectedDelivery = '';
    this.delivery = [
      'Teleporting (via wormhole)',
      'Teleporting (quatum teleportation)'
    ];
  });
