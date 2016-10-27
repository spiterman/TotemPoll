;(function(){
  angular.module('app.question')
    .factory('QuestionFactory', ['$http', function($http){

      var model = {};
      model.testPost = function(data){
        console.log(data);
        return $http({
          method: 'POST',
          url: '/api/users',
          data: data
        })
        .then(function(responseObj){
          return responseObj;
        });
      };

      model.testGet = function() {
        return;
      }

      return model;

    }]);

})();
