<template>
    <v-date-picker v-model="date" 
    @update:modelValue="date" 
    :color="datePickerColor" 
    :id-picker="idPicker" 
    :is-date-filter-close="isDateFilterClose" 
    :title="titlePicker" 
    :is-date-begin-value-clicked="isDateBeginValueClicked" 
    :is-date-end-value-clicked="isDateEndValueClicked">
    </v-date-picker>
</template>
<script setup>
import { computed } from 'vue';
// import { useDate } from 'vuetify';
// import dayjsMixins from '../mixins/dayjs.js';

const props = defineProps({
  idPicker: {
    type: Number,
    default:0, 
    required: true,
  },
  titlePicker: {
    type: String,
    default: '',
    required: true,
  },
  datePickerColor: {
    type: String,
    default: '',
    required: true,
  },
  isDateFilterClose: {
    type: Boolean,
    default: false,
    required: true,
  },
  date: {
    type: Object,
    default: new Date(),
    required: false,
  },
  // dateBeginArray: {
  //   type: Array,
  //   default: [],
  //   required: false,
  // },
  // dateEndArray: {
  //   type: Array,
  //   default: [],
  //   required: false,
  isDateBeginValueClicked: {
    type: Boolean,
    default: false,
    required: false,
  },
  isDateEndValueClicked: {
    type: Boolean,
    default: false,
    required: false,
  },
});


/**
 * @param {Date} date
 * @function 
 * if reactivity in date selected, 
 * emits to menuHeader new value
 */
const emit = defineEmits(['update:modelValue'])
const date = computed({
  get(){
    return props.modelValue
    // return props.dateBegin, props.dateEnd
  },
  set(date) {
    emit('update:modelValue', date)
  }
})

//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//------------myAdapter----------------------
// const tsMilliseconds = () => dayjsMixins.methods.unixMilliSecondTs(dateBegin.value)
// console.log("BALOOO", dateBegin.value)
// console.log('TSUNIX', tsMilliseconds(dateUpdate()))
// const dateBeginConvert = tsMilliseconds(dateBegin.value)
// console.log('dateBeginConvert', dateBeginConvert)
// const dateEndConvert = tsMilliseconds(dateEnd.value)
// console.log('dateEndConvert', dateEndConvert)



//---------------------TODO-------------------------
//getDiff (date: unknown, comparing: unknown, unit: string) => number
//Returns the difference between two dates in the specified unit.
</script>
<style></style>