<template>
        <v-date-picker v-model="actualValueDate" @update:model-value="dateUpdate" :color="datePickerColor" 
        :is-date-filter-close="isDateFilterClose" :date="date">
        </v-date-picker>
</template>
<script setup>
import { ref, computed } from 'vue';
import { useDate } from 'vuetify';
import dayjsMixins from '../mixins/dayjs.js';

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
    type: String,
    default: new Date("").getTime(),
    required: true, 
  },
});


//--------------------DATA-----------------------
// access VUETIFY - date composable 
const dateVuetify = useDate()
console.log('dateNOTconverted', dateVuetify.date(new Date()))

//V-MODEL - bidirectionnel
// const datePicker = ref(new Date())
// console.log('datePicker', datePicker.value)

const actualValueDate = ref(new Date())
console.log('datePicker', actualValueDate.value)
const newValue = ref(dateUpdate)
console.log('BRRR', newValue.ref)
//V-MODEL - update
function dateUpdate(event){
  actualValueDate.value
  console.log('aurevoir', actualValueDate)
  // console.log('SALUT', event.target.value)
  // actualValueDate.value = event
  // if(event){
  // }
  // console.log('dateUpdate', typeof newValue)
}


// //V-MODEL - update
// function dateUpdate(newValue){
//   actualValueDate.value = newValue
//   console.log('dateUpdate', typeof newValue)
// }

// const actualValueDate = computed({
//   get(){
//     return datePicker.value
//   },
//   set(actualValue){
//     emit('update:modelValue', actualValue)
//   }
// })

function DATE (){
//  tsMilliseconds = dayjsMixins.methods.unixSecondTs

DateFinaleFormat = Number(datePicker.value = new Date())
console.log('DAteFinalFormat', DateFinaleFormat)
//  console.log('datePicker', datePicker.value)
// console.log('TSUNIX', tsMilliseconds(dateUpdate()))
  
}

//---------------------TS------------------------
const tsMilliseconds = dayjsMixins.methods.unixSecondTs
console.log('TSUNIX', tsMilliseconds(dateUpdate()))
//-------------------METHODS----------------------
/**
 * @param {Object} datePicker
 * @function
 * function to convert dateSelected into milliseconds
 * example : Wed Dec 06 2023 15:34:49 GMT+0100 (is dateVuetify)
 */
function newSelectionInMillisecond (){
if(datePicker.value != dateUpdate.newValue )
newValue 
}


//-------------TODO-----------------------
//getDiff (date: unknown, comparing: unknown, unit: string) => number
//Returns the difference between two dates in the specified unit.
</script>
<style>
</style>