angular.module('Data', [])

.factory('countryData', ['ApiCalls', function(ApiCalls) {
  var countryData = {};

  countryData.countries = countries.getCountries();
  console.log(countryData);
  return countryData;
}]);