angular.module("countries")

.controller('countriesController', ['$scope', 'countries',
  function($scope, countries) {
    countries.getCountries().then(function(result) {
      $scope.countries = result.geonames.country;
    });
}])

.controller('detailsController', ['$scope', 'countries', '$route',
    function($scope, countries, $route) {
      countries.getCountry($route.current.params.countryCode).then(function(result) {
        $scope.country = result.country;
    });

    countries.getCapital($route.current.params.countryCode).then(function(result) {
        console.log(result);
        $scope.capital = result.geonames[0];
        $scope.capitalPopulation = $scope.capital.population;
    });

    countries.getNeighbors($route.current.params.countryCode).then(function(result) {
        $scope.count = result.totalResultsCount;
        $scope.neighbors = result.geonames;
    });
}]);