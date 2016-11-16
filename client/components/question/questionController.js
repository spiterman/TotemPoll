;(function(){
  angular.module('app.question', [])
    .controller('QuestionController', ['QuestionFactory', function(QuestionFactory){
      var vm = this;

      vm.currentQuestion = {};

      vm.getComments = function(){
        QuestionFactory.getComments()
          .then(function(responseObj){
            vm.comments = responseObj;
          })
      };

      vm.agree = function(){
        QuestionFactory.agree()
          .then(getNextQuestion);
      };

      vm.pass = function(){

      };

      vm.disagree = function(){

      };

      function getNextQuestion(){
        QuestionFactory.getAllQuestions()
          .then(function(responseObj){
            console.log(responseObj);
            vm.currentQuestion = responseObj;
          })
      };

    }]);
})();
