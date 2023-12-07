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
                                   <emojis :icon-path="iconPath" :icon-color="iconColor" width="40" height="40"></emojis>
                            </v-btn>
                     </v-col>
                 </v-row>
              </v-toolbar>
              <v-container>
                     <v-row no-gutters class="justify-center">
                            <v-col cols="6" v-for="picker in pickers" :key="picker.id">
                                   <DateFilter :header="picker.titlePicker" :date-picker-color="datePickerColor" :date="date" :titlePicker="picker.titlePicker" :id="picker.id"
                                   v-if="isDateFilterClose" :is-date-filter-close="isDateFilterClose" class="ma-2 pa-2">
                                   </DateFilter>
                            </v-col>
                     </v-row>
              </v-container>
       </v-card>
</template>
<script setup>
import emojis from '../components/emojis.vue'
import DateFilter from '../components/DateFliter.vue'
import { ref } from 'vue'

//----------------DATA------------------
//--------------------about pickers---------------------
const pickers = [
{idPicker: 0, titlePicker:'début'},
{idPicker: 1, titlePicker:'fin'} 
]
console.log('aboutPickers', pickers)



const date = ref("")
console.log('[component],[menuHeader], date', date.value)
const isDateFilterClose = ref(false)
const datePickerColor = ref('orange')

// const dateUpdate= ref()
// console.log('dateUpdate', dateUpdate.value)


//-----------PROPS--------------
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
