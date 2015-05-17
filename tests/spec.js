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
      module('ApiCalls');
    });

  it('should return API data', function() {
    inject(function(countriesData, $rootScope, $httpBackend) {
        $httpBackend.expect('GET', 'http://api.geonames.org/countryInfo?username=ccolbert').respond(200);
        var status = false;

        $rootScope.$digest();
        $httpBackend.flush();
        expect(status).toBe(true);
        $httpBackend.verifyNoOutstandingRequest();
        });
    });
});

describe('countries controller', function () {

    var controller = null;
    $scope = null;

    beforeEach(function() {
        module('countries');
    });

    beforeEach(inject(function ($controller, $rootScope) {
        $scope = $rootScope.$new();
        controller = $controller('countriesController', {
            $scope: $scope
        });
    }));

  it('should return list of countries', function () {
    // $scope.getCountries();
    expect($scope.countries).toBeDefined();
  });
});