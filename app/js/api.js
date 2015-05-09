angular.module('ApiCalls', [])

.factory('countries', ['$http', '$route','$q', function($http, $route, $q) {

    var username = 'ccolbert';
    var api_prefix = 'http://api.geonames.org/';
    return {

        getCountries: function() {

            var defer = $q.defer();
            var url = api_prefix + "countryInfo?username=" + username;
            console.log(url);
            $http.get(url)
                .success(function(data) {
                  defer.resolve(data);
                });
            return defer.promise;

        }
    };
   
}]);