app.controller('RugbyController', function($scope, $http) {
  $scope.result = "";
  $http.get('https://skysportsapi.herokuapp.com/sky/getnews/rugby-league/v1.0/')
    .success(function(data, status, headers,config){
      console.log('data success');
      console.log(data); // for browser console
      $scope.result = data; // for UI
    })
    .error(function(data, status, headers,config){
      console.log('data error');
    })
    .then(function(result){
      things = result.data;
    });
})
