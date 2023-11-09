import { Meteor } from 'meteor/meteor'
import { createApp } from 'vue'
import {subscribe, VueMeteor} from 'vue-meteor-tracker'
import vuetify from './libs/vuetify.js'
import  App from './App.vue'
import  { router } from './libs/router'
import Reviews from "../collections/reviews";

Meteor.startup(() => {
  const app = createApp(App)
  app.use(router).use(VueMeteor).use(vuetify)
  app.mount('#app')

  subscribe('reviewsCollection')

})