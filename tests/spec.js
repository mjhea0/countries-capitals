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

  it('should return API data', function() {
    inject(function(countriesData, $httpBackend, $q) {
      $httpBackend.when('GET', 'http://api.geonames.org/countryInfoJSON?&username=ccolbert').respond(200);
      var countries;
      $q.when(countriesData.getCountries()).then(function(result) {
        countries = result.geonames;
        console.log(result);
      });
      // $rootScope.$digest();
      $httpBackend.flush();
      expect(countries).toBeDefined();
      $httpBackend.verifyNoOutstandingRequest();
    });
  });

});

describe('countriesData without mocking', function () {

  beforeEach(function () {
    module('countries');
  });

  it('should return API data', function() {
    inject(function(countriesData, $rootScope, $http, $route, $q) {
      var countries;
      $q.when(countriesData.getCountries()).then(function(result) {
        countries = result.geonames;
        console.log(result.geonames);
      });
      expect(countries).toBeDefined();
    });
  });

});

// describe('countries controller', function () {

//   var controller = null;
//   $scope = null;

//   beforeEach(function() {
//     module('countries');
//   });

//   beforeEach(inject(function ($controller, $rootScope) {
//     $scope = $rootScope.$new();
//     controller = $controller('countriesController', {
//       $scope: $scope
//     });
//   }));

//   it('should return list of countries', function () {
//     inject(function(countriesData) {
//       // console.log(countriesData);
//       countriesData.getCountries().then(function(result) {
//         $scope.countries = result.geonames.country;
//         // console.log(result);
//       });
//       // console.log($scope.countries);
//       expect($scope.countries).toBeDefined();
//     });
//   });

// });