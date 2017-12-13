const angular = require('angular')
require('angular-ui-bootstrap')
require('@uirouter/angularjs')

angular

  .module('app', ['ui.bootstrap', 'ui.router'])

  .run(require('./run'))

  .config(require('./states.js'))

  .service('authService', require('./services/auth.service'))

  .directive('fileModel', require('./directives/file-model.directive'))

  .component('app', {
    template: require('./components/app/app.component.html'),
    controller: require('./components/app/app.component')
  })
  .component('appNavBar', {
    template: require('./components/nav-bar/nav-bar.component.html'),
    controller: require('./components/nav-bar/nav-bar.component')
  })
  .component('appHome', {
    template: require('./components/home/home.component.html'),
    controller: require('./components/home/home.component')
  })
  .component('appAbout', {
    template: require('./components/about/about.component.html'),
    controller: require('./components/about/about.component')
  })
  .component('loginPage', {
    template: require('./components/login-page/login-page.component.html'),
    controller: require('./components/login-page/login-page.component')
  })
  .component('myFilesPage', {
    template: require('./components/my-files-page/my-files-page.component.html'),
    controller: require('./components/my-files-page/my-files-page.component')
  })

  
