//Meteor
import { Meteor } from 'meteor/meteor'
import {VueMeteor} from 'vue-meteor-tracker'
//vue
import  App from './App.vue'
import { createApp } from 'vue'
import vuetify from './libs/vuetify.js'
//router
import {router} from './libs/router.js'
//icon
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiAccount } from '@mdi/js'

Meteor.startup(() => {
  const app = createApp(App)
  app.use(router).use(VueMeteor).use(vuetify)
  app.mount('#app')
})