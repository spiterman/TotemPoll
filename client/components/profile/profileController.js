;(function(){
  'use strict';

  angular.module('app.profile', [])
    .controller('ProfileController', ['$scope', function($scope){
      var vm = this;

      vm.profileUser = {};
      vm.profileUser.username = 'SergeyP';

    }]);
})();
