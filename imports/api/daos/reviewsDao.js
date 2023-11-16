import { Meteor } from "meteor/meteor";
import ReviewsCollection from '../../dbCollections/reviewsCollection.js';
class ReviewsDao {

  /**
   * Review DAO
   * @param {string} review - the review to insert
   * @param {string} userEmail - the user that wrote the review
   * @param {number} ts - the timestamp of the review
   * @returns {Promise<string>}
   */
  static async insertReview(review, userEmail, ts) {
    console.log('[Dao][Reviews][insertReview] Inserting review with params', review, userEmail, ts)
    try {
      const result = ReviewsCollection.insert({
        review: review,
        userEmail: userEmail,
        ts: ts
      })
      return result
    }catch (e) {
      console.log('[Dao][Reviews][insertReview] An error has occurred when inserting a review', e)
      throw new Meteor.Error(e.error, e.reason, e.details)
    }
  }

}

export default ReviewsDao