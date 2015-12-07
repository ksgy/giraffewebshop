'use strict';

describe('Controller: CartCtrl', function () {

  // load the controller's module
  beforeEach(module('giraffeWebshopApp'));

  var CartCtrl,scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CartCtrl = $controller('CartCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should be 0 items by default', function () {
    expect(CartCtrl.items.length).toBe(0);
  });

  it('should add new item', function () {

    CartCtrl.add({
        id: 1,
        name: 'West African Giraffe',
        description: 'They are also called the Nigerian Giraffe due to the fact that is where most of them are found.',
        price: 1337
      });
    expect(CartCtrl.items.length).toBe(1);
    CartCtrl.remove(1);
    expect(CartCtrl.items.length).toBe(0);
  });

  it('should remove an item', function () {
    expect(CartCtrl.items.length).toBe(0);
    CartCtrl.add({
        id: 1,
        name: 'West African Giraffe',
        description: 'They are also called the Nigerian Giraffe due to the fact that is where most of them are found.',
        price: 1337
      });
    expect(CartCtrl.items.length).toBe(1);
    CartCtrl.remove(1);
    expect(CartCtrl.items.length).toBe(0);
  });
});
