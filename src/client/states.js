/*@ngInject*/
module.exports = function ($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('app', {
      url: '/',
      template: '<app></app>'
    })
    .state('app.login', {
      url: 'login',
      template: '<login-page></login-page>'
    })
    .state('app.home', {
      url: 'home',
      template: '<app-home></app-home>'
    })
    .state('app.about', {
      url: 'about',
      template: '<app-about></app-about>'
    })
    .state('app.my_files', {
      url: 'my-files',
      template: '<my-files-page></my-files-page>'
    })
    
}
