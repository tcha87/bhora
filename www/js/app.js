// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('bhora', ['ionic', 'ionic-material']);

app.config(function($ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
})

app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

app.service("FreshlyPressed",["$http", "$log", FreshlyPressed]);


function FreshlyPressed($http,$log) {
  this.getNews = function(){


    $http.get('http://date.jsontest.com/')
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
    /*$http.jsonp("https://skysportsapi.herokuapp.com/sky/getlatest/v1.0?callback=JSON_CALLBACK")

      .success(function(result){

      $log.info(JSON.stringify(result))


    });*/

  };
}


app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.cricket', {
        url: '/cricket',
        views: {
            'menuContent': {
                templateUrl: 'templates/cricket.html',
                controller: 'CricketController'
            }
        }
    })

    .state('app.settings', {
        url: '/settings',
        views: {
            'menuContent': {
                templateUrl: 'templates/settings.html',
                controller: 'SettingsController'
            }
        }
    })





    .state('app.cricket-live', {
        url: '/cricket-live',
        views: {
            'menuContent': {
                templateUrl: 'templates/cricketlive.html',
                controller: 'CricketLiveController'
            }
        }
    })
    .state('app.rugby', {
        url: '/rugby',
        views: {
            'menuContent': {
                templateUrl: 'templates/rugby.html',
                controller: 'RugbyController'
            }
        }
    })

    .state('app.home', {
        url: '/home',
        views: {
            'menuContent': {
                templateUrl: 'templates/home.html',
                controller: 'ComponentsCtrl'
            }
        }
    })

    .state('app.news', {
      url: "/news",
      views: {
          'menuContent': {
              templateUrl: 'templates/news.html',
            controller: 'FeedsCategoriesCtrl'
          }
      }
    })

    .state('app.matches', {
      url: "/matches",
      views: {
          'menuContent': {
              templateUrl: 'templates/matches.html',
              controller: 'ListsCtrl'
          }
      }
    })

    .state('app.players', {
        url: '/players',
        views: {
            'menuContent': {
                templateUrl: 'templates/players.html',
                controller: 'InkCtrl'
            }
        }
    })

    .state('app.forum', {
        url: '/forum',
        views: {
            'menuContent': {
                templateUrl: 'templates/players.html',
                controller: 'InkCtrl'
            }
        }
    })

  

    .state('app.time', {
        url: '/time',
        views: {
            'menuContent': {
                templateUrl: 'templates/time.html',
                controller: 'TimeCtrl'
            }
        }
    })

    .state('app.soccer', {
        url: '/soccer',
        views: {
            'menuContent': {
                templateUrl: 'templates/soccer.html',
                controller: 'ExtensionsCtrl'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/time');
});
