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
                                   <DateFilter class="ma-2 pa-2" v-model="dateBegin" 
                                   @update:modelValue="handleVModel(newDateBegin)"
                                          :date-begin-array="dateBeginArray"
                                          :date-picker-color="pickerBeginDateAttrs.datePickerColor"
                                          :id-picker="pickerBeginDateAttrs.idPicker"
                                          :title-picker="pickerBeginDateAttrs.titlePicker" v-if="isDateFilterClose"
                                          :is-date-filter-close="isDateFilterClose = true"
                                          :is-date-begin-clicked="isDateBeginClicked"/>
                                   

                            </v-col>
                            <v-col cols="6">
                                   <DateFilter class="ma-2 pa-2" v-model="dateEnd" 
                                   @update:modelValue="handleVModel(newDateEnd)"
                                          :date-end-array="dateEndArray"
                                          :date-picker-color="pickerEndDateAttrs.datePickerColor"
                                          :id-picker="pickerEndDateAttrs.idPicker"
                                          :title-picker="pickerEndDateAttrs.titlePicker" v-if="isDateFilterClose"
                                          :is-date-filter-close="isDateFilterClose = true"
                                          :is-date-end-value-clicked="isDateEndClicked"/>
                                
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
})
//-------------------------------------DATA--------------------------------------
//-----------------------------------PICKERS-------------------------------------
const pickerBeginDateAttrs = { idPicker: 0 ,titlePicker: 'début', datePickerColor: 'lime-lighten-2' }
const pickerEndDateAttrs = { idPicker: 1, titlePicker: 'fin', datePickerColor: 'light-green-lighten-2' }
//-------------------------BUTTON DISPLAY DATEPICKERS----------------------------
const isDateFilterClose = ref()

//---------------------------pickers initialisation------------------------------
const dateBegin = ref(new Date())
const dateEnd = ref(new Date())
const isDateBeginClicked = ref(false)
const isDateEndClicked = ref(false)
//------------------------------dates arrays ------------------------------------
const dateBeginArray = ref([])
console.log('dateBeginArray', dateBeginArray.value)
const dateEndArray = ref([])
console.log('dateEndArray', dateEndArray.value)
//-----------------------------pickers reactivity--------------------------------
const newDateBegin = ref()
console.log('newDateBeginValue', newDateBegin.value)
const newDateEnd = ref()
console.log('newDateEndValue', newDateEnd.value)

//----------------------------Picker Array reactivity----------------------------
/**
 * @argument {Object} newDateBegin
 * @function
 * Watch IF REACTIVITY of dateBegin
 */
watch(dateBegin, (newDateBegin)=> {
       console.log('newDateBegin',newDateBegin)
       handleVModel(newDateBegin)
});
/**
 * @argument {Object} newDateEnd
 * @function
 * Watch IF REACTIVITY of dateEnd
 */
watch(dateEnd, (newDateEnd)=> {
       console.log('newDateEnd',newDateEnd)
       handleVModel(newDateEnd)
});

/**
 * @argument {Number} vModelId - v-model id
 * @argument {Object} newDateBegin - 
 * @function
 * @author Yasmina Boumaraf
 * function that is called if WATCHERS see reactivity: 
 * 2) take id v-model 
 * 3) IF CHANGE targeted, value clicked = true (initial = false)
 * 3) INSERT new date in array 
 */
function handleVModel(newDateBegin, newDateEnd){
       if ((newDateBegin && newDateEnd)|| (newDateBegin|| newDateEnd)) {
               const vModelId = isDateBeginClicked.value ? pickerBeginDateAttrs.idPicker : pickerEndDateAttrs.idPicker;
              switch (vModelId) {
                     case 0: 
                            isDateBeginClicked.value = true
                            dateBeginArray.value.push(newDateBegin.value);
                            console.log('dateBeginArray', dateBeginArray.value)
                            console.log('newDateBeginValue', newDateBegin.value)
                            break;
                     case 1:
                            isDateBeginClicked.value = true
                            dateEndArray.push(newDateEnd.value);
                            console.log('dateEndArray', dateEndArray.value)
                            console.log('newDateEnd', newDateEnd.value)
                            break;
              }
       }
};


</script>
