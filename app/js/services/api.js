angular.module('ApiCalls', [])

.factory('countries', ['$http', '$route', '$q', function($http, $route, $q) {

    var username = 'ccolbert';
    var api_prefix = 'http://api.geonames.org/';

    return {
      getCountries: function() {
        var defer = $q.defer();
        var url = api_prefix + "countryInfo?username=" + username;
        $http.get(url,
          {transformResponse: function(data) {
              var x2js = new X2JS();
              var json = x2js.xml_str2json(data);
                return json;
              }
            }
          )
          .success(function(data) {
            defer.resolve(data);
          });
        return defer.promise;
    }
  };

}]);