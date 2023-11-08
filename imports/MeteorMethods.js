//A Meteor Method to update/delete the doc.

Meteor.methods({
DeleteReview(){
    Review.delete('currentReview', { $delete: { review: Delete() } });
},

UpdateStatistic(){
    Statistic.upsert('currentStatistics', {$set: { statistic: new Statistic() } });
}
});

