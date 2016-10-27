;(function(){
  angular.module('app.question', [])
    .controller('QuestionController', ['QuestionFactory', function(QuestionFactory){
      var vm = this;

      vm.data = {
        name: 'sergey',
        username: 'spiterman'
      };


      vm.testFunc = function(){
        // console.log(vm.data);
        console.log('Test Func was called');
        QuestionFactory.testPost(vm.data).then(function(responseObj){
          vm.token = responseObj;
          console.log(responseObj);
        });

        // vm.data.username = '';
        // vm.data.password = '';
      };

    }]);
})();
