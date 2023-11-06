import SimpleSchema from 'simpl-schema';


//try to do a little backend 
Meteor.methods({
    'insert.review' ({email, review, id, ts}){
        new SimpleSchema({
            email: {type: String},
            review: {type: String},
        }).validate({email, review, id, ts});

        const ts = new Date().getDate()
    }
})