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
      if(_.filter(items, { 'id': item.id }).length > 0) {
        _.filter(items, { 'id': item.id })[0].amount++;
      } else {
        item.amount = 1;
        items.push(item);
      }

    };
    var removeItem = function(itemID){
      if(_.filter(items, { 'id': itemID })[0].amount > 1) {
        _.filter(items, { 'id': itemID })[0].amount--;
      } else {
          _.remove(items, function(item){
          return item.id == itemID
        })
      }
    };
    var getTotal = function() {
      var total = 0;
      _.forEach(items, function(item){
        total+=item.amount;
      });
      return total
    };

    var api = {
      getCartContents: getCartContents,
      addItem: addItem,
      removeItem: removeItem,
      getTotal: getTotal
    }

    return api
  });
