'use strict';

describe('Controller: GiraffesCtrl', function () {

  // load the controller's module
  beforeEach(module('giraffeWebshopApp'));

  var GiraffesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GiraffesCtrl = $controller('GiraffesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GiraffesCtrl.awesomeThings.length).toBe(3);
  });
});
