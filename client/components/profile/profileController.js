;(function(){
  'use strict';

  angular.module('app.profile', [])
    .controller('ProfileController', ['ProfileFactory', function(ProfileFactory){
      var vm = this;

      vm.currentUser = {};

      vm.getUser = function(){
        ProfileFactory.getCurrentUser()
          .then(function(responseObj){
            vm.currentUser = responseObj.data;
          });
      };

      vm.writeQuestion = function(){
        console.log('this got calle')
        ProfileFactory.writeQuestion();
      }

      // Initialize Profile Page
      vm.getUser();

    }]);
})();
