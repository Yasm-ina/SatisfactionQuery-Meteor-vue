// import { defineStore } from "pinia";

// export const useQueryStore = defineStore(
//   "query", {
//   state: () => ({
//     //STATE
//     reviews: [],
//     emails: [],
//     graphics: []
//   }),

//     //GETTERS
//     getters: {
//       getReviews: (state) => state.reviews,
//       getEmails: (state) => state.emails, 
//       getGraphics: (state) => state.graphics,
//     },

    //ACTIONS
    //definition method verification made in front to not overuse 
    //verfications of backend
    // actions: {

    // Meteor.call("reviews.insertReview",
    //   {
    //     reviewId: "reviewId",
    //     email: "email",
    //   },
    //   ),
    //   (err, res) => {
    //     if (err) {
    //       alert(err);
    //     } else {
    //       console.log("succes");
    //     }
    //   };
      
      //call validation only
    // insertReview.validate({ wrong: "args" });
    
    //call the Method with costum userId in a test
    // insertReview.run.call({reviewId: "exempleReviewId"},{
    //   emailId: "exemple"  
    //   });    // insertReview.validate({ wrong: "args" });

  //   }
  // });
  