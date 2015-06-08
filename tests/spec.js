describe("countries routes", function() {

  beforeEach(function() {
    module('countries');
  });

  it('should load home page', function() {
  inject(function($route, $location, $rootScope, $httpBackend) {
    var route = $route.routes['/'];
    $httpBackend.whenGET(route.templateUrl).respond('...');

    $rootScope.$apply(function() {
      $location.path(route.originalPath);
    });

    expect($route.current.templateUrl).toBe("./partials/home.html");
    });
  });

  it('should load countries page', function() {
    inject(function($route, $location, $rootScope, $httpBackend) {
      var route = $route.routes['/countries'];
      $httpBackend.whenGET(route.templateUrl).respond('...');

      $rootScope.$apply(function() {
        $location.path(route.originalPath);
      });

      expect($route.current.templateUrl).toBe("./partials/countries.html");
    });
  });

});


describe('countriesData without mocking', function() {

  beforeEach(function () {
    module('countries');
  });

  var $controller;

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  describe('should return API data', function() {
    var factory;
    beforeEach(inject(function(countriesData) {
      factory = countriesData;
    }));
    it('Should be defined', function() {
      expect(factory.getCountries()).toBeDefined();
    });
  });
});