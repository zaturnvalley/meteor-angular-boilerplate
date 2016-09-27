import angular from 'angular';
import 'bootstrap/dist/css/bootstrap.css';

import { Meteor } from 'meteor/meteor';

function onReady() {
  angular.bootstrap(document, [], {strictDi: true});
}

if(Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}