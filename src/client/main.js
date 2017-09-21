const angular = require('angular');
require('angular-ui-bootstrap');
require('@uirouter/angularjs');

angular

  .module('app', ['ui.bootstrap', 'ui.router'])

  .config(require('./states.js'))

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

;
