import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './imageList.html';

class ImageList {
  constructor($reactive, $scope) {
    'ngInject';

    $reactive(this).attach($scope);

    this.subscribe('images');

    this.helpers({
      images() {
        return Images.find({});
      }
    });
  }
}

const name = 'imageList';

export default angular.module(name, [angularMeteor])
.component(name, {
  template,
  controllerAs: name,
  controller: ImageList
});