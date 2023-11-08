import { Meteor } from 'meteor/meteor'
import { createApp } from 'vue'
import { VueMeteor } from 'vue-meteor-tracker'
import pinia from './store/store.js'
import vuetify from './libs/vuetify.js'
import  App from './App.vue'
import  { router } from './libs/router'

Meteor.startup(() => {
  const app = createApp(App)
  //pinia setup syntax provide and inject 
  app.provide('useQuerySatisfactionStore', 'value')
  const useQuerySatisfactionStore = inject(useQuerySatisfactionStore)
  app.use(router).use(VueMeteor).use(vuetify).use(pinia)
  app.mount('#app')
})
