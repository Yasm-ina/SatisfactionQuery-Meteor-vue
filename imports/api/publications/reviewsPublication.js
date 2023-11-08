import {Meteor} from "meteor/meteor";
import ReviewsCollection from "../../collections/reviews.js";
Meteor.publish('reviewsCollection', function (){
  return ReviewsCollection.find()
})