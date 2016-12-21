(function(){
  angular.module('app.writeQuestion', [])
    .controller('WriteQuestionController', ['$state', 'WriteQuestionFactory', 'localStorageService', function($state, WriteQuestionFactory, localStorageService){
      var vm = this;

      vm.question = "";
      vm.description = "";

      vm.submitQuestion = function(){
        var data = {
          question: vm.question,
          description: vm.description,
          token: localStorageService.get('token')
        };

        WriteQuestionFactory.submitQuestion(data)
          .then(function(responseObj){
            console.log(responseObj);
          });
      };

      // console.log(a);

    }]);
})();
