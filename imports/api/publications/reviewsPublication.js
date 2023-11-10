import {Meteor} from "meteor/meteor";
import ReviewsCollection from "../../db/reviewsCollection.js";

Meteor.publish('reviewsCollection', function (){
  return ReviewsCollection.find()
})