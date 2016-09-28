import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './home.html';

class Home {
  constructor($reactive, $scope) {
    'ngInject';

    $reactive(this).attach($scope);

    // this.subscribe('images');

    // this.helpers({
    //   images() {
    //     return Images.find({})
    //   }
    // });

    this.name = 'Zach';
    this.num = 0;
  }
  printName() {
    this.num += 1;
    console.log(this.name + ' ' + this.num);
  }
  mult() {
    this.num *= 2;
    console.log(this.name + ' ' + this.num);
  }
  div() {
    this.num /= 2;
    console.log(this.name + ' ' + this.num);
  }
}

const name = 'home';

export default angular.module(name, [angularMeteor, uiRouter])
.component(name, {
  template,
  controllerAs: name,
  controller: Home
})
.config(config);

function config($stateProvider) {
  'ngInject';

  $stateProvider
  .state('home', {
    url: '/',
    template: '<home></home>'
  })
}