<template>
        <v-date-picker
        v-model="actualValueDate" :color="datePickerColor" :is-date-filter-close="isDateFilterClose" 
        :date="date" @update:model-value="dateUpdate">
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
    default: new Date(),
    required: true, 
  },
  id: {
    type: Number,
    default: 0,
    required: true
  },
});

//-----------------------DATA---------------------------
// access VUETIFY - date composable 
const accessDateVuetify = useDate()

const actualValueDate = ref(new Date())
console.log('datePicker', actualValueDate.value)
// const dateFormatted = actualValueDate.value.format()
// console.log('formated', dateFormatted)
console.log('dateNOTconverted', accessDateVuetify.date(new Date()))


const newValue = ref(dateUpdate)
console.log('BRRR', newValue.ref)

//V-MODEL - update
function dateUpdate(update){
  actualValueDate.value
  console.log('aurevoir', actualValueDate)
  // console.log('SALUT', event.target.value)
  // actualValueDate.value = event
  // if(event){
  // }
  // console.log('dateUpdate', typeof newValue)
}

// const actualValueDate = computed({
//   get(){
//     return datePicker.value
//   },
//   set(actualValue){
//     emit('update:modelValue', actualValue)
//   }
// })

//------------------------TS--------------------------
const tsMilliseconds = dayjsMixins.methods.unixSecondTs
console.log('TSUNIX', tsMilliseconds(dateUpdate()))
//---------------------METHODS------------------------
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

//---------------------TODO-------------------------
//getDiff (date: unknown, comparing: unknown, unit: string) => number
//Returns the difference between two dates in the specified unit.
</script>
<style>
</style>