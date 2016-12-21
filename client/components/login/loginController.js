(function(){

  angular.module('app.login', [])
    .controller('LoginController', ['LoginFactory', 'localStorageService', '$state', function(LoginFactory, localStorageService, $state) {

      var vm = this;
      vm.userData = {};
      vm.userData.name = '';
      vm.userData.username = '';
      vm.userData.password = '';

      vm.signUp = function(){
        console.log('Sign Up Called')
        LoginFactory.signUp(vm.userData)
          .then(function(response){
            console.log('Signed Up');
            console.log(response.data.user.username);
            localStorageService.set('token', response.data.token);
            $state.go('profile', {username: response.data.user.username});
          });

        // Reset names
        // vm.userData.username = '';
        // vm..userData.password = '';
      };

      vm.signIn = function(){
        LoginFactory.signIn(vm.userData)
          .then(function(response){
            console.log('Signed In');
            console.log(response);
            localStorageService.set('token', response.data.token);
            $state.go('profile', {username: response.data.user.username});
          });
      };

      // Handle Sign In vs Sign Up
      var signIn = {
        alternateAction: 'Sign Up',
        alternateMessage: 'New to us?',
        action: 'Sign In',
        fn: vm.signIn
      };

      var signUp = {
        alternateAction: 'Sign In',
        alternateMessage: 'Already have an account? ',
        action: 'Sign Up',
        fn: vm.signUp
      };

      vm.loginState = signIn;

      vm.toggleLoginState = function(){
        if(vm.loginState === signIn){
          vm.loginState = signUp;
        } else {
          vm.loginState = signIn;
        }
      };



    }]);
})();
