angular.module("countries")

.controller('countriesController', ['$scope', 'countriesData',
  function($scope, countriesData) {
    countriesData.getCountries().then(function(result) {
      $scope.countries = result.geonames.country;
    });
}])

.controller('detailsController', ['$scope', 'countriesData', '$route',
    function($scope, countriesData, $route) {
      countriesData.getCountry($route.current.params.countryCode).then(function(result) {
        $scope.country = result.country;
    });

    countriesData.getCapital($route.current.params.countryCode).then(function(result) {
        console.log(result);
        $scope.capital = result.geonames[0];
        $scope.capitalPopulation = $scope.capital.population;
    });

    countriesData.getNeighbors($route.current.params.countryCode).then(function(result) {
        $scope.count = result.totalResultsCount;
        $scope.neighbors = result.geonames;
    });
}]);