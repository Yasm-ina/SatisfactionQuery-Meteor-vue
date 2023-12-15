<template>
       <v-card class="mx-auto" rounded="50" elevation="5">
              <v-toolbar>
                     <v-row>
                            <v-col cols="6" class="justify-start">
                                   <v-toolbar-title>filtrer par date: </v-toolbar-title>
                            </v-col>
                            <v-spacer></v-spacer>
                            <v-col cols="6" class="justify-end">
                                   <v-btn @click="isDateFilterClose = !isDateFilterClose">
                                          <emojis :icon-path="iconPath" :icon-color="iconColor" width="40" height="40">
                                          </emojis>
                                   </v-btn>
                            </v-col>
                     </v-row>
              </v-toolbar>
              <v-container>
                     <v-row no-gutters class="justify-center">
                            <v-col cols="6">
                                   <DateFilter class="ma-2 pa-2" v-model="dateBegin" @update:modelValue="handleVModel"
                                          :date-begin-array="dateBeginArray"
                                          :date-picker-color="pickerBeginDateAttrs.datePickerColor"
                                          :id-picker="pickerBeginDateAttrs.idPicker"
                                          :title-picker="pickerBeginDateAttrs.titlePicker" v-if="isDateFilterClose"
                                          :is-date-filter-close="isDateFilterClose = true"
                                          :is-date-begin-clicked="isDateBeginClicked"
                                          @update:dateBeginArray="emitArraysUpdate"/>


                            </v-col>
                            <v-col cols="6">
                                   <DateFilter class="ma-2 pa-2" v-model="dateEnd" @update:modelValue="handleVModel"
                                          :date-end-array="dateEndArray"
                                          :date-picker-color="pickerEndDateAttrs.datePickerColor"
                                          :id-picker="pickerEndDateAttrs.idPicker"
                                          :title-picker="pickerEndDateAttrs.titlePicker" v-if="isDateFilterClose"
                                          :is-date-filter-close="isDateFilterClose = true"
                                          :is-date-end-value-clicked="isDateEndClicked"
                                          @update:dateEndArray="emitArraysUpdate" />

                            </v-col>
                     </v-row>
              </v-container>
       </v-card>
</template>
<script setup>
import emojis from '../components/emojis.vue'
import DateFilter from '../components/DateFliter.vue'
import { ref, watch } from 'vue'
//----------------------------PROPS------------------------------
const props = defineProps({
       iconPath: {
              type: String,
              default: '',
              required: true
       },
       iconColor: {
              type: Object,
              default: '',
              required: false
       },
       dateBeginArray: {
              type: Array,
              default: [],
              required: true
       },
       dateEndArray: {
              type: Array,
              default: [],
              required: true
       },
})
//-----------------------------------PICKERS-------------------------------------
const pickerBeginDateAttrs = { idPicker: 0, titlePicker: 'début', datePickerColor: 'lime-lighten-2' }
const pickerEndDateAttrs = { idPicker: 1, titlePicker: 'fin', datePickerColor: 'light-green-lighten-2' }
//-------------------------BUTTON DISPLAY DATEPICKERS----------------------------
const isDateFilterClose = ref()

//---------------------------pickers initialisation------------------------------
const dateBegin = ref(new Date())
console.log('dateBegin', dateBegin.value)
const dateEnd = ref(new Date())
const isDateBeginClicked = ref(false)
const isDateEndClicked = ref(false)
//------------------------------dates arrays ------------------------------------
const dateBeginArray = ref([])
const dateEndArray = ref([])
//-----------------------------pickers reactivity--------------------------------
// const newDateBegin = ref()
// const newDateEnd = ref()
//----------------------------Picker Array reactivity----------------------------
/**
 * @argument {Object} newDateBegin
 * @function
 * Watch REACTIVITY of dateBegin
 * if catch reactivity, call handleVMODEL to change value to click = true
 * add date to array 
 */
watch(dateBegin, (newDateBegin) => {
       console.log('[WATCHER], newDateBegin', newDateBegin)
       if (newDateBegin) {
              handleVModel(newDateBegin)
              dateBeginArray.value.push(newDateBegin);
              console.log('dateBeginArray', dateBeginArray.value)
              console.log('newDateBegin', newDateBegin)
       }
});
/**
 * @argument {Object} newDateEnd
 * @function
 * Watch REACTIVITY of dateEnd
 * if catch reactivity, call handleVMODEL to change value to click = true
 * add date to array 
 */
watch(dateEnd, (newDateEnd) => {
       console.log('[WATCHER], newDateEnd', newDateEnd)
       if (newDateEnd) {
              handleVModel(newDateEnd)
              dateEndArray.value.push(newDateEnd);
              console.log('dateEndArray', dateEndArray.value)
              console.log('newDateEndValue', newDateEnd)
       }
});


const emitArraysUpdate = defineEmits(['update:dateBeginArray', 'update:dateEndArray'])
/**
 * 
 * @argument {Object} newDate - new date selected in dateBegin or dateEnd
 * @function
 * @author Yasmina Boumaraf
 * function that: 
 * 1) take id v-model 
 * 2) IF vmodel clicked = true
 */
function handleVModel(newDate) {
       console.log('handle parent', newDate)
       if (newDate) {
              const vModelId = isDateBeginClicked.value ? pickerBeginDateAttrs.idPicker : pickerEndDateAttrs.idPicker;
              switch (vModelId) {
                     case 0:
                            isDateBeginClicked.value = true
                            emitArraysUpdate('update:dateBeginArray', dateBeginArray.value);
                            break;
                     case 1:
                            isDateBeginClicked.value = true
                            emitArraysUpdate('update:dateEndArray', dateEndArray.value)
                            break;
              }
       }
};


</script>
