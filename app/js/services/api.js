angular.module('ApiCalls', [])

.factory('countriesData', ['$http', '$route', '$q', function($http, $route, $q) {

    var username = 'ccolbert';
    var api_prefix = 'http://api.geonames.org/';

    return {
      getCountries: function() {
        var defer = $q.defer();
        var url = api_prefix + "countryInfoJSON";
        var request = {
          username: username
        };
        $http.get(url, {cache: true,
          params: request
            }
          )
          .success(function(data) {
            defer.resolve(data);
          })
          .error(function(data) {
            defer.reject();
          });
        return defer.promise;
    },

    getCountry: function(code) {
      var defer = $q.defer();
      var url = api_prefix + "countryInfoJSON";
      var request = {
        username: username,
        country: code
      };
      $http.get(url, {cache: true, 
        params: request
            }
          )
          .success(function(data) {
            defer.resolve(data.geonames);
          })
          .error(function(data){
            defer.reject();
          });
        return defer.promise;
    },

    getCapital: function(code) {
      var defer = $q.defer();
      var url = api_prefix + "searchJSON";
      var request = {
        country: code,
        q: "capital",
        username: username
      };
        $http.get(url, {params: request, cache: true
            }
          )
          .success(function(data) {
            defer.resolve(data);
          })          
          .error(function(data){
            defer.reject();
          });
        return defer.promise;
    },

    getNeighbors: function(code) {
      var defer = $q.defer();
      var url = api_prefix + "neighboursJSON";
      var request = {
        country: code,
        username: username
      };
        $http.get(url, {params: request, cache: true
            }
          )
          .success(function(data) {
            defer.resolve(data);
          })
          .error(function(data){
            defer.reject();
          });
        return defer.promise;
    },
  };

}]);