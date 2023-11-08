import SimpleSchema from "simpl-schema";

//Meteor Publication: sends all documents to client
Meteor.publish("Review.insert", function (reviewId, email) {
  new SimpleSchema({
    reviewId: { type: String },
    email: { type: String, RegExp },
  }).validate({ reviewId, email });

  const foundReview = Reviews.findOne(reviewId);
  const foundEmail = Emails.findOne(email);

  if ((!foundReview && foundEmail) || (foundReview && !foundEmail)) {
    throw new Meteor.Error(
      "[METHODS publication][insertReview]",
      "Either review was not selected and/or email not written or not in good format"
    );
  } else {
    return [foundReview.find(reviewId), foundEmail.find(email)];
  }
});

// Meteor.publish('Emails', function(){
//     return Emails.find({});
// })

Meteor.publish("Statistic", function () {
  return Statistic.find({
    reviewId: { $exist: false },
  });
});
