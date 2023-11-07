import { defineStore } from "pinia";
import Meteor from  'meteor/meteor';
import SimpleSchema from "simpl-schema";
import {ref, computed} from 'vue';
import { ValidateMethod} from 'meteor/mdg:validated-method';

export const useQuerySatisfactionStore = defineStore(
  "querySatisfaction",
  () => {
    //STATE
    const reviews = ref();
    const emails = ref();
    const graphics = ref();

    //GETTERS
    const getReviews = computed(() => reviews.value);
    const getEmails = computed(() => emails.value);
    const getGraphics = computed(() => graphics.value);

    //ACTIONS
    //definition method verification made in front to not overuse 
    //verfications of backend
    Meteor.methods({
        insertReview = new ValidateMethod({
        name: "reviews.insertReview",
       validate: new SimpleSchema({
          reviewId: { type: String },
          email: { type: String, RegExp }
        }).validator(),
        //MongoDb method's find
        run({reviewId, email}){
        const review = reviews.findOne(reviewId);
        if ((!review && email) || (review && !email)) {
          throw new Meteor.Error("[review][insertReview] [insertEmail]",
            "Either review was not selected and email not written or not in good format")
        }
        reviews.insert(review, email, {
          $set: { email: newEmail },
          $set: { review: newReview },
        });
      }
    })
    })
    

    Meteor.call("reviews.insertReview",
      {
        reviewId: "reviewId",
        email: "email",
      },
    ),
      (err, res) => {
        if (err) {
          alert(err);
        } else {
          console.log("succes");
        }
      };

    //call validation only
    insertReview.validate({ wrong: "args" });

    //call the Method with costum userId in a test
    insertReview.run.call({reviewId: "exempleReviewId"},{
      emailId: "exemple"  
      });

    return { reviews, emails, graphics, getEmails, getGraphics, getReviews };
  }
);
