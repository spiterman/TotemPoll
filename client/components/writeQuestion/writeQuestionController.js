(function(){
  angular.module('app.writeQuestion', [])
    .controller('WriteQuestionController', ['$state', 'WriteQuestionFactory', function($state, WriteQuestionFactory){
      var vm = this;

      vm.submit = function(){
        WriteQuestionFactory.submit()
          .then(function(responseObj){
            console.log(responseObj);
          });
      };

    }]);
})();
