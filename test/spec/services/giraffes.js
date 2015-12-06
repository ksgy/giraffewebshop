'use strict';

describe('Service: Giraffes', function () {

  // load the service's module
  beforeEach(module('giraffeWebshopApp'));

  // instantiate service
  var Giraffes;
  beforeEach(inject(function (_Giraffes_) {
    Giraffes = _Giraffes_;
  }));

  it('should do something', function () {
    expect(!!Giraffes).toBe(true);
  });

});
