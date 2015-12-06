'use strict';

describe('Controller: GireffesGiraffesCtrl', function () {

  // load the controller's module
  beforeEach(module('giraffeWebshopApp'));

  var GireffesGiraffesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GireffesGiraffesCtrl = $controller('GireffesGiraffesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GireffesGiraffesCtrl.awesomeThings.length).toBe(3);
  });
});
