import { Meteor } from 'meteor/meteor'
import  App from './App.vue'
import { createApp } from 'vue'
import  { router } from './libs/router.js'
import {subscribe, VueMeteor} from 'vue-meteor-tracker'
import vuetify from './libs/vuetify.js'
import ReviewsCollection from '../dbCollections/reviewsCollection.js'

Meteor.startup(() => {
  const app = createApp(App)
  app.use(router).use(VueMeteor).use(vuetify).use(ReviewsCollection)
  app.mount('#app')
  subscribe('reviewsCollection')
})