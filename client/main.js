import angular from 'angular';
import 'bootstrap/dist/css/bootstrap.css';

import { Meteor } from 'meteor/meteor';

import { name as Bootstrap } from '../imports/ui/bootstrap.js';

function onReady() {
  angular.bootstrap(document, [Bootstrap], {strictDi: true});
}

if(Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}