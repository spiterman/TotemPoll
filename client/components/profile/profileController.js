;(function(){
  'use strict';

  angular.module('app.profile', [])
    .controller('ProfileController', ['ProfileFactory', function(ProfileFactory){
      var vm = this;

      vm.profileUser = {};
      vm.profileUser.username = 'SergeyP';

      vm.testFunc = function(){
        ProfileFactory.testPost({'hello': 'world'}).then(function(responseObj){
          vm.response = responseObj;
        });
      }

      // console.log(vm.response)

      // vm.testFunc = function() {
      //   ProfileFactory.testPost({
      //     'hello': 'world'
      //   })
      //   .then(function(responseObj){
      //     vm.response = responseObj;
      //   });
      // };

    }]);
})();
