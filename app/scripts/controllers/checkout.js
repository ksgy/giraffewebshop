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
    this.shoppingCart = shoppingCart;

    this.delivery = [
      {
        type: 'Teleporting (via wormhole) - extra 10 bitcoin',
        price: 10
      },
      {
        type: 'Teleporting (quatum teleportation) - extra 20 bitcoin',
        price: 20
      },
      {
        type: 'Collection in person - free',
        price: 0
      }

    ];
  });
