import {Meteor} from "meteor/meteor";
import ReviewsModel from "../models/reviewsModel";

Meteor.methods({

  /**
   * Review Controller
   * @param {string} review - the review to insert
   * @param {string} userEmail - the user that wrote the review
   * @returns {Promise<string>}
   */
  insertReview: async function(review, userEmail) {
    console.log('[Controller][Reviews][insertReview] Inserting review with params', review, userEmail)
    try {
      //TODO do de validation process
      const ts = new Date().getTime() // ts of query
      const result = await ReviewsModel.insertReview(review, userEmail, ts)
      return result // TODO
    }catch (e) {
      console.log('[Controller][Reviews][insertReview] An error has occurred when inserting a review', e)
      throw new Meteor.Error(e.error, e.reason, e.details)
    }
  }

})