import {Meteor} from "meteor/meteor";
import ReviewsCollection from "../../dbCollections/reviewsCollection.js";

Meteor.publish('reviewsCollection', function (){
  return ReviewsCollection.find({})
})