//http://openweathermap.org/api

var app = angular.module('forecast', []);

app.controller('testForecast1', function($http) {
  
  var vm = this;
  
  var URL = 'http://api.openweathermap.org/data/2.5/forecast/daily';
  
  var request = {
    method: 'GET',
    url: URL,
    params: {
       q: 'KansasCity',
      mode: 'json',
      units: 'imperial',
      cnt: '7',
      appid: 'a5aa2542e614ca58e5a204d215360781'
    }
  };
  
  $http(request)
    .then(function(response) {
      vm.data = response.data;
    }).
    catch(function(response) {
      vm.data = response.data;
    });
});

app.controller('testForecast2', function($http) {
  
  var vm = this;
  
  var URL = 'http://api.openweathermap.org/data/2.5/weather?zip';
  
  var request = {
    method: 'GET',
    url: URL,
    params: {
    	 q: '44070', //ZIP CODE NOT WORKING AS EXPECTED, THIS MUST BE A CITY ID
      mode: 'json',
     appid: 'a5aa2542e614ca58e5a204d215360781'
    }
  };
  
  $http(request)
    .then(function(response) {
      vm.data = response.data;
    }).
    catch(function(response) {
      vm.data = response.data;
    });
});

app.controller('testForecast3', function($http) {
  
  var vm = this;
  
  var URL = 'http://api.openweathermap.org/data/2.5/forecast/daily';
  
  var request = {
    method: 'GET',
    url: URL,
    params: {
       q: '44070', //ZIP CODE NOT WORKING AS EXPECTED, THIS MUST BE A CITY ID
      mode: 'json',
      units: 'imperial',
      cnt: '7',
      appid: 'a5aa2542e614ca58e5a204d215360781'
    }
  };
  
  $http(request)
    .then(function(response) {
      vm.data = response.data;
    }).
    catch(function(response) {
      vm.data = response.data;
    });
});