import {Meteor} from "meteor/meteor";
import ReviewsDao from "../daos/reviewsDao.js";

class ReviewsModel {

  /**
   * Review Model
   * @param {string} review - the review to insert
   * @param {string} userEmail - the user that wrote the review
   * @param {number} ts - the timestamp of the review
   * @returns {Promise<string>}
   */
  static async insertReview(review, userEmail, ts) {
    console.log('[Model][Reviews][insertReview] Inserting review with params', review, userEmail, ts)
    try {
      const result = await ReviewsDao.insertReview(review, userEmail, ts)
      return result
    }catch (e) {
      console.log('[Model][Reviews][insertReview] An error has occurred when inserting a review', e)
      throw new Meteor.Error(e.error, e.reason, e.details)
    }
  }
}

export default ReviewsModel