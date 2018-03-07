app.factory('News', function($http) {
        var dataSource = 'https://skysportsapi.herokuapp.com/sky/getnews/football/v1.0/';

        return {
            getNews: function() {
                return $http.jsonp(dataSource);
            }

        }
    });
