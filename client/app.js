var app = angular.module("app", [
  'ui.router',
  'app.profile'
  ]);

app.controller("mainController", function($scope){
  $scope.name = "Hydra";
})

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('profile', {
      templateUrl: 'components/profile/profile.html',
      controller: 'ProfileController',
      url: '/profile'
    })

}])
