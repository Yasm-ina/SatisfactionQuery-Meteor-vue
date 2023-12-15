<template>
  <v-date-picker v-model="internalDate" @update:modelValue="updateDate" 
  :color="datePickerColor" 
  :id-picker="idPicker"
  :is-date-filter-close="isDateFilterClose" 
  :title="titlePicker" 
  :date-begin="dateBegin" 
  :date-end="dateEnd"
  :date-begin-array="dateBeginArray" 
  :date-end-array="dateEndArray"
  :is-date-begin-clicked="isDateBeginClicked" 
  :is-date-end-clicked="isDateEndClicked">
  </v-date-picker>
</template>
<script setup>
import { watch, ref } from 'vue';
// import { useDate } from 'vuetify';
import dayjsMixins from '../mixins/dayjs.js';

const props = defineProps({
  idPicker: {
    type: Number,
    default: undefined,
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
   modelValue: {
    type: Object,
    default: new Date(),
    required: false,
  },
  dateBegin: {
    type: Object,
    default: new Date(),
    required: false
  },
  dateEnd: {
    type: Object,
    default: new Date(),
    required: false
  },
  dateBeginArray: {
    type: Array,
    default: [],
    required: false,
  },
  dateEndArray: {
    type: Array,
    default: [],
    required: false,
  },
  isDateBeginClicked: {
    type: Boolean,
    default: false,
    required: false,
  },
  isDateEndClicked: {
    type: Boolean,
    default: false,
    required: false,
  },
});

const dateBegin = ref()
const dateEnd = ref()
const dateBeginArray = ref([])
const dateEndArray = ref([])
const internalDate = ref();


//----------------------EMITS-------------------------
const emitUpdate = defineEmits(['update:modelValue'])


const updateDate = () => {
  emitUpdate('update:modelValue', internalDate.value)
}


watch(()=> props.modelValue, (newValue) => {
  internalDate.value = newValue
  if(newValue){
  const dateMilliSeconds = () => dayjsMixins.methods.unixMilliSecondTs(newValue)
  return dateMilliSeconds(newValue) ,console.log('conversionDateMilliSec', dateMilliSeconds(newValue))
  }
})
</script>
<style></style>