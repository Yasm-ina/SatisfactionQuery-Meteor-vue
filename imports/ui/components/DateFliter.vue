<template>
  <v-date-picker v-model="internalDate" @update:modelValue="updateDate" :color="datePickerColor" :id-picker="idPicker"
    :is-date-filter-close="isDateFilterClose" :title="titlePicker" :date-begin="dateBegin" :date-end="dateEnd"
    :date-begin-array="dateBeginArray" :date-end-array="dateEndArray"
    :is-date-begin-clicked="isDateBeginClicked" :is-date-end-clicked="isDateEndClicked">
  </v-date-picker>
</template>
<script setup>
import { watch, ref } from 'vue';
// import { useDate } from 'vuetify';
// import dayjsMixins from '../mixins/dayjs.js';

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
console.log('[DateFilter] dateBegin', dateBegin.value)
const dateEnd = ref()
console.log('[DateFilter] dateEnd', dateEnd.value)
const dateBeginArray = ref([])
const dateEndArray = ref([])
const internalDate = ref();
const emitUpdate = defineEmits(['update:modelValue'])
const updateDate = () => {
  emitUpdate('update:modelValue', internalDate.value)
}
watch(()=> props.modelValue, (newValue) => {
  internalDate.value = newValue
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