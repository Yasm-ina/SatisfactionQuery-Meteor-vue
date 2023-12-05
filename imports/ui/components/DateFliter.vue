<template>
        <v-date-picker :show-week="true" :color="datePickerColor" :is-date-filter-close="isDateFilterClose">
        </v-date-picker>
</template>
<script setup>
import { defineProps} from 'vue'
// import dayjsMixins from '../mixins/dayjs.js'

const props = defineProps ({
  isDateFilterClose: {
    type: Boolean,
    default: false,
    required: true, 
  },
  datePickerColor: {
    type: String,
    default: '',
    required: true
  }
  // date : {
  //   type : Number,
  //   required : true,
  // },
  // ts : {
  //   type: Number,
  //   default: new Date().getTime(),
  //   required: true, 
  // },
  //   allowedDates: {
  //   type: Function,
  //   default: undefined,
  //   required: true
  // }
});

//date chosen
// const timeFrame  = ref((ts) => {
//   return dayjsMixins.methods.switchCase(ts, 0)
// });

// dateChosen = ref(timeFrame.value);
// //timeFrame
// console.log('timeFrame', timeFrame.value)
// //date pickerOpenState
// const isDateFilterOpen = ref(false)
// function clickOpenDatePicker () {
//        isDateFilterOpen.value == true
// }

//allowedDates
// const dateOne = new Date(props.ts)
// const dateTwo = new Date(props.ts)
// const allowedDates = (ts) => {
//  dayjsMixins.methods.switchCase(ts, 0);
// };

//---------------EMIT----------------
</script>
<style>
</style>