(function(){

  angular.module('app.login', ['LocalStorageModule'])
    .config(function(localStorageServiceProvider){
      localStorageServiceProvider
        .setPrefix('testing');
    })
    .controller('LoginController', ['LoginFactory', 'localStorageService', '$state', function(LoginFactory, localStorageService, $state) {

      var vm = this;

      vm.userData = {}
      vm.userData.username = '';
      vm.userData.password = '';

      vm.signUp = function(){

        LoginFactory.signUp(vm.userData)
          .then(function(response){
            console.log('got the response');
            console.log(response);
            localStorageService.set('token', response.data.token);
          })

        // Reset names
        // vm.username = '';
        // vm.password = '';
      };

      vm.signIn = function(){
        LoginFactory.signIn(vm.userData)
          .then(function(response){
            console.log('signed in');
            console.log(response);
            localStorageService.set('token', response.data.token);
          })
          .then(function(){
            $state.go('question');
          });
      };


    }]);
})();
