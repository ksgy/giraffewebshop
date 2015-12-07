'use strict';

describe('Controller: CheckoutCtrl', function () {

  // load the controller's module
  beforeEach(module('giraffeWebshopApp'));

  var CheckoutCtrl,
    scope,
    shoppingCart;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _shoppingCart_) {
    scope = $rootScope.$new();
    CheckoutCtrl = $controller('CheckoutCtrl', {
      $scope: scope,
      shoppingCart: _shoppingCart_
      // place here mocked dependencies
    });
  }));

  it('should check for delivery types', function () {
    expect(CheckoutCtrl.delivery.length).toBeGreaterThan(0);
  });

  it('by default 0 items', function () {
    expect(CheckoutCtrl.items.length).toBe(0);
  });

});
