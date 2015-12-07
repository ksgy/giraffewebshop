'use strict';

describe('Controller: GiraffesCtrl', function () {

  // load the controller's module
  beforeEach(module('giraffeWebshopApp'));

  var GiraffesCtrl,
    scope, Giraffes;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _Giraffes_) {
    scope = $rootScope.$new();
    GiraffesCtrl = $controller('GiraffesCtrl', {
      $scope: scope,
      Giraffes: _Giraffes_
    });
  }));

  it('should be 0 items by default', function () {
      expect(GiraffesCtrl.giraffes.length).toBe(0);
  });

});
