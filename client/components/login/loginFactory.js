;(function(){
  angular.module('app.login')
    .factory('LoginFactory', ['$http',  function($http) {

      var model = {};

      model.signUp = function(data){
        return $http({
          method: 'POST',
          data: data,
          url: '/api/users/signup'
        }).then(function(response){
          return response;
        })
      };

      model.signIn = function(data){
        return $http({
          method: 'POST',
          data: data,
          url: '/api/users/signin'
        }).then(function(response){
          return response;
        });
      };

      return model;
    }]);

})();
