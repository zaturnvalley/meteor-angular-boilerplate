import { Meteor } from 'meteor/meteor';
import { Images } from './collection';

Meteor.methods({
  'images.insert'(imageUrl) {
    newImage = {
      url: imageUrl,
      createdAt: new Date(),
      owner: this.userId
    }

    Images.insert(newImage);
  }
});