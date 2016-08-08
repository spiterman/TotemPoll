;(function(){
  'use strict';

  angular.module('app.profile')
    .factory('ProfileFactory', ['$http', function($http){
      var model = {};

      model.testGet = function(){
        return $http({
          method: 'GET',
          url: '/api/profile'
        })
        .then(function(responseObj){
          return responseObj;
        });
      };

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

      return model;

    }]);
})();
