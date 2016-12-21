;(function(){
angular.module('app.writeQuestion')
  .factory('WriteQuestionFactory', ['$http', function($http){
    var model = {};

    model.submitQuestion = function(data){
      return $http({
        method: 'POST',
        data: data,
        url: '/api/questions'
      })
    };

    return model;
  }]);
})();
