import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Images } from '../../../api/images';
import { Meteor } from 'meteor/meteor';

import template from './imageList.html';

class ImageList {
  constructor($reactive, $scope) {
    'ngInject';

    $reactive(this).attach($scope);

    this.subscribe('images');

    this.imageUrl = '';

    this.helpers({
      images() {
        return Images.find({});
      }
    });
  }

  submitImage() {
    Meteor.call('images.insert', this.imageUrl);
  }
}

const name = 'imageList';

export default angular.module(name, [angularMeteor])
.component(name, {
  template,
  controllerAs: name,
  controller: ImageList
});