angular.module("countries")

.controller('countriesController', ['$scope', 'countries',
  function($scope, countries) {
    countries.getCountries().then(function(result) {
      console.log(result.geonames.country);
      $scope.countries = result.geonames.country;
    });
}]);