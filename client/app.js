var app = angular.module("app", [
  'ui.router',
  'ui.bootstrap',
  'app.profile',
  'app.question',
  'app.login',
  'app.writeQuestion'
  ]);

app.config(['$stateProvider', '$urlRouterProvider', 'localStorageServiceProvider', function($stateProvider, $urlRouterProvider, localStorageServiceProvider){

  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('profile', {
      templateUrl: 'components/profile/profile.html',
      controller: 'ProfileController',
      url: '/profile/:username'
    })
    .state('question', {
      templateUrl: 'components/question/question.html',
      controller: 'QuestionController',
      url: '/question'
    })
    .state('comment', {
      templateUrl: 'components/comment/comment.html',
      controller: 'CommentController',
      url: '/comment'
    })
    .state('login', {
      templateUrl: 'components/login/login.html',
      controller: 'LoginController',
      url: '/login'
    })
    .state('writeQuestion', {
      templateUrl: 'components/writeQuestion/writeQuestion.html',
      controller: 'WriteQuestionController',
      url: '/writeQuestion'
    });

}]);

app.directive('testDirective', function(){
  return {
    restrict: 'E',
    templateUrl: 'components/custom_directives/test/test.html'
  }
});


