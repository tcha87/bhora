app.controller('CricketLiveController', function($scope, $http) {
  $scope.result = "";
  $http.get('http://cricapi.com/api/cricket/?apikey=7dn28he8h2e72')
    .success(function(data, status, headers,config){
      console.log('data success');
      console.log(data.data); // for browser console
      $scope.result = data.data; // for UI
    })
    .error(function(data, status, headers,config){
      console.log('data error');
    })
    .then(function(result){
      things = result.data;
    });


    // Cricket Live Matches Data http://cricapi.com/api/cricket/?apikey=7dn28he8h2e72
})
