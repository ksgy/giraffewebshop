'use strict';

/**
 * @ngdoc function
 * @name giraffeWebshopApp.controller:GiraffesCtrl
 * @description
 * # GiraffesCtrl
 * Controller of the giraffeWebshopApp
 */
angular.module('giraffeWebshopApp')
  .controller('GiraffesCtrl', function (Giraffes, shoppingCart) {

    var th = this;
    th.giraffes = [];

    Giraffes.getGiraffes().then(function(giraffes) {
      th.giraffes = giraffes;
    });

    th.add = function(item){
      shoppingCart.addItem(item);
    };

  });
