<template>
        <v-date-picker v-model='dateForPicker' :color="datePickerColor" :is-date-filter-close="isDateFilterClose" @update:model-value="selectedDate">
        </v-date-picker>
</template>
<script setup>
import { useDate } from 'vuetify'
import {ref} from "vue";

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
  },
  date : {
    type: Number,
    default: 0,
    required: true,
  },
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

const dateForPicker = ref(new Date())

console.log(useDate)

const ciao = useDate()
console.log(ciao)
console.log('MIAO', ciao.date(new Date()))

function selectedDate(newValue){
  console.log('NewValue', newValue)
  dateForPicker.value = newValue
}

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