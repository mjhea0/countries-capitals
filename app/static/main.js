angular.module('countries', ['ngRoute', 'ngAnimate'])

.config(['$locationProvider','$routeProvider',
  function($locationProvider, $routeProvider) {
    $routeProvider
      .when("/home", {
        templateUrl: "./partials/home.html"
      })
      .when("/countries", {
        templateUrl: "./partials/countries.html",
      })
      .when("/countries/:countryCode", {
        templateUrl: "./partials/details.html",
      })
      .otherwise({
         redirectTo: '/home'
      });
}]);