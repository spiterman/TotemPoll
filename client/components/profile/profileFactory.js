;(function(){
  'use strict';

  angular.module('app.profile')
    .factory('ProfileFactory', ['$http', '$state', function($http, $state){
      var model = {};

      model.testPost = function(data){
        console.log(data)
        return $http({
          method: 'POST',
          url: '/api/profile/testPost',
          data: data
        })
        .then(function(responseObj){
          console.log('response obj', responseObj);
          return responseObj.data;
        }, function(res){
          console.error('Error: ', res);
        });
      };

      model.getCurrentUser = function(){
        return request('GET', '/api/users/' + $state.params.username, null);
      }

      function request(method, url, data){
        return $http({
          method: method,
          url: url,
          data: data
        });
      };

      return model;

    }]);
})();
