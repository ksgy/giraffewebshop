'use strict';

/**
 * @ngdoc service
 * @name giraffeWebshopApp.shoppingCart
 * @description
 * # shoppingCart
 * Service in the giraffeWebshopApp.
 */
angular.module('giraffeWebshopApp')
  .service('shoppingCart', function () {
    var items = [];
    var getCartContents = function(){
      return items;
    };
    var addItem = function(item){
      items.push(item);
    };
    var removeItem = function(itemID){

    };
    var getTotal = function() {
      return getCartContents().length
    };

    var api = {
      getCartContents: getCartContents,
      addItem: addItem,
      removeItem: removeItem,
      getTotal: getTotal
    }

    return api
  });
