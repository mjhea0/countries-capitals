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

describe('countriesData', function () {

   beforeEach(function () {
     module('countries');
   });

  var factory;
  beforeEach(inject(function(countriesData) {
    factory = countriesData;
  }));

  it('should return API data', function() {
    inject(function($httpBackend) {

      $httpBackend.when('GET', 'http://api.geonames.org/countryInfoJSON?&username=ccolbert').respond(200);

      it('Should be defined', function() {
        expect(factory.getCountries()).toBeDefined();
        $httpBackend.flush();
        $httpBackend.verifyNoOutstandingRequest();
      });

    });
  });

});

describe('countriesData without mocking', function() {

  beforeEach(function () {
    module('countries');
  });

  var factory;
  beforeEach(inject(function(countriesData) {
    factory = countriesData;
  }));

  describe('should return API data', function() {

    it('Should be defined', function() {
      expect(factory.getCountries()).toBeDefined();
    });
  });
});