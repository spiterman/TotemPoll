;(function(){
  angular.module('app.question')
    .factory('QuestionFactory', ['$http', function($http){

      var model = {};

      model.getAllQuestions = function(){
        return $http({
          method: 'GET',
          url: 'api/questions'
        });
      };

      model.getNextQuestion = function(){
        return $http({
          method: 'GET',
          url: '/api/questions/next'
        });
      };

      model.agree = function(){
        return $http({
          method: 'POST',
          url: '/api/userQJoin',
          data: 'agree'
        });
      };

      model.disagree = function(){
        return $http({
          method: 'POST',
          url: '/api/userQJoin',
          data: 'disagree'
        });
      };

      model.pass = function(){
        return $http({
          method: 'POST',
          url: '/api/userQJoin',
          data: 'pass'
        });
      };

      model.getComments = function(){
        return $http({
          method: 'GET',
          url: '/api/userQJoin'
        });
      };

      return model;

    }]);

})();
