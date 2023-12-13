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
                                   <DateFilter class="ma-2 pa-2" v-model="dateBegin" @update:modelValue="newDateBeginValue"
                                          :date-picker-color="pickerBeginDateAttrs.datePickerColor"
                                          :id-picker="pickerBeginDateAttrs.idPicker"
                                          :title-picker="pickerBeginDateAttrs.titlePicker" v-if="isDateFilterClose"
                                          :is-date-filter-close="isDateFilterClose = true"
                                          :is-date-begin-value-clicked="isDateBeginValueClicked" />
                                   {{ newDateBeginValue }}

                            </v-col>
                            <v-col cols="6">
                                   <DateFilter class="ma-2 pa-2" v-model="dateEnd" @update:modelValue="newDateEndValue"
                                          :date-picker-color="pickerEndDateAttrs.datePickerColor"
                                          :id-picker="pickerEndDateAttrs.idPicker"
                                          :title-picker="pickerEndDateAttrs.titlePicker" v-if="isDateFilterClose"
                                          :is-date-filter-close="isDateFilterClose = true"
                                          :is-date-end-value-clicked="isDateEndValueClicked" />
                                   {{ newDateEndValue }} 
                            </v-col>
                     </v-row>
              </v-container>
       </v-card>
</template>

<script setup>
import emojis from '../components/emojis.vue'
import DateFilter from '../components/DateFliter.vue'
import { ref, watch } from 'vue'
//---------------------------PICKERS----------------------------
const pickerBeginDateAttrs = { idPicker: 0, titlePicker: 'début', datePickerColor: 'lime-lighten-2' }
const pickerEndDateAttrs = { idPicker: 1, titlePicker: 'fin', datePickerColor: 'light-green-lighten-2' }

//------------------------DATA-------------------------

const isDateFilterClose = ref()

//---------------------pickers initialisation-------------------------
const dateBegin = ref(new Date())
console.log('dateBegin', dateBegin.value)
const dateEnd = ref(new Date())
console.log('dateEnd', dateEnd.value)
const isDateBeginValueClicked = ref(false)
console.log('isDateBeginValueClicked', isDateBeginValueClicked.value)
const isDateEndValueClicked = ref(false)
console.log('isDateBeginValueClicked', isDateEndValueClicked.value)
//--------------------pickers reactivity------------------------------
const newDateBeginValue = ref()
console.log('newDateBeginValue', newDateBeginValue.value)
const newDateEndValue = ref()
console.log('newDateEndValue', newDateEndValue.value)
//-------------------dates arrays-------------------------------------
/**
 * @argument {Event} newDateBeginValue
 * @argument {Array} newDateBeginArray
 * @argument {Event} newDateEndValue
 * @argument {Array} newDateEndArray
 * @function
 * function that : 
 * 1) OBSERVE v-models(when date is selected)
 * 2) take idPicker  
 * 3) IF CHANGE targeted, changes value clicked to true (initial = false)
 * 3) INSERT new date in array 
 */
watch([dateBegin, dateEnd], ([newDateBeginValue, newDateEndValue]) => {
       console.log('salut')
       if ((newDateBeginValue || newDateEndValue) || (newDateBeginValue && newDateEndValue)) {
              const choiceEventPickerId = isDateBeginValueClicked.value = true ? pickerBeginDateAttrs.idPicker : pickerEndDateAttrs.idPicker;
              switch (choiceEventPickerId) {
                     case 0:
                            isDateBeginValueClicked.value = true;
                            let dateBeginArray = dateBeginArray.push(newDateBeginValue);
                            newDateBeginValue = dateBeginArray[dateBeginArray.length - 1]
                            console.log('newDateBeginValue', dateBeginArray)
                            break;
                     case 1:
                            isDateEndValueClicked.value = true;
                            let dateEndArray = dateEndArray.push(newDateEndValue);
                            newDateEndValue = dateEndArray[dateEndArray.length - 1]
                            console.log('newDateEndValue', dateEndArray)
                            break;
              }
       }
});

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
       }

})
</script>
