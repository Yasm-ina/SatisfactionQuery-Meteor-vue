import ReviewsCollection from '../../db/reviewsCollection.js'


Meteor.methods({
    /**
     *Review 
     @param {string} userReview - review to insert 
     @param {string} userEmail - user that chose review
     */
    InsertReviews() {
        ReviewsCollection.insert('reviewToInsert', {$set: {userReview: new userReview, userEmail: new userEmail}})
        console.log(ReviewsCollection.insert('reviewToInsert', {$set: {userReview: new userReview, userEmail: new userEmail}})
        )
    },
    })