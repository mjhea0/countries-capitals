angular.module('countries', ['ApiCalls', 'ngRoute', 'ngAnimate'])

.config(['$locationProvider','$routeProvider',
  function($locationProvider, $routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "./partials/home.html"
      })
      .when("/countries", {
        templateUrl: "./partials/countries.html",
        controller: "countriesController",
      })
      .when("/countries/:countryCode", {
        templateUrl: "./partials/details.html",
        controller: "detailsController",
      })
      .otherwise({
         redirectTo: '/'
      });
}])

.run(function($rootScope, $location, $timeout) {
    $rootScope.$on('$routeChangeError', function() {
        $location.path("/error");
    });
    $rootScope.$on('$routeChangeStart', function() {
        $rootScope.isLoading = true;
    });
    $rootScope.$on('$routeChangeSuccess', function() {
      $timeout(function() {
        $rootScope.isLoading = false;
      }, 1000);
    });
});