import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { name as Home } from './pages/home/home';

import template from './bootstrap.html';

class Bootstrap {}

const name = 'bootstrap';

export default angular.module(name, [
  angularMeteor, 
  uiRouter,
  Home
  ])
.component(name, {
  template, 
  controllerAs: name,
  controller: Bootstrap
})
.config(config);

function config($locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/');
}