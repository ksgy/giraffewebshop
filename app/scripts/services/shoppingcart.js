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
    var th = this;
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

    var getTotalPrice = function(){
      var total = 0;
      _.forEach(items, function(item){
        total += item.price * item.amount;
      });

      total += this.shoppingCart.selectedDelivery.price;
      return total;
    }

    var clearItems = function() {
      items = [];
      this.selectedDelivery = null;
    };

    var api = {
      getCartContents: getCartContents,
      addItem: addItem,
      removeItem: removeItem,
      getTotal: getTotal,
      getTotalPrice: getTotalPrice,
      clearItems: clearItems
    }

    return api
  });
