// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import DayJsAdapter from '@date-io/dayjs';



import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
  date: {
    adapter: DayJsAdapter,
  },
});
export default vuetify;
