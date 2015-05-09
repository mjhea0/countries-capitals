angular.module("countries")

.controller('countriesController', ['$scope', '$location', '$filter', 'countryData', '$q', function($scope, $location, $filter, countryData, $q) {
    $scope.countries = countryData.countries;
}]);