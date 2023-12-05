// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
//import { VuetifyDateAdapter } from 'vuetify/date/adapters/vuetify';
import DayJsAdapter from '@date-io/dayjs'


import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
// import * as VuetifyDateAdapter from 'vuetify/locale/adapters/date';

const vuetify = createVuetify({
  components,
  directives,
  date: {
    adapter: DayJsAdapter,
  },
});
export default vuetify;
