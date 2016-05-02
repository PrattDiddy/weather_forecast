//http://openweathermap.org/api

var app = angular.module('forecast', []);

var key = 'a5aa2542e614ca58e5a204d215360781'; //API KEY

app.controller('forecast', function($scope, $http, $log) {
  console.log('call forecast');

  $scope.displayForm = false;
  $scope.location = ""; //DEFAULT IS WASHINGTON, DC

  $scope.change = function() {
    console.log('call change()');

    $scope.displayForm = true;

    var vm = this;

    var URL = 'http://api.openweathermap.org/data/2.5/weather?zip';
  
    var request = {
      method: 'GET',
      url: URL,
      params: {
         q: $scope.location + ',us',
        units: 'imperial',
        mode: 'json',
       appid: key
      }
    };

    console.log('requesting daily weather data for: ' + $scope.location);
      
    $http(request)
      .then(function(response) {
        console.log('good');
        vm.data_day = response.data;
      }).
      catch(function(response) {
        console.log('bad');
        vm.data_day = response.data;
      });
  
    var URL = 'http://api.openweathermap.org/data/2.5/forecast/daily';
    
    var request = {
      method: 'GET',
      url: URL,
      params: {
         q: $scope.location + ',us',
        mode: 'json',
        units: 'imperial',
        cnt: '7',
        appid: key
      }
    };

    console.log('requesting weekly weather data for: ' + $scope.location);
      
    $http(request)
      .then(function(response) {
        console.log('good');
        vm.data_week = response.data;
      }).
      catch(function(response) {
        console.log('bad');
        vm.data_week = response.data;
      });
    };
});