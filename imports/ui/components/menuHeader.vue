<template>
       <v-card class="mx-auto" rounded="50" elevation="5">
              <v-toolbar>
                     <v-col cols="6" class="justify-start">
                            <v-toolbar-title>filtrer par date: </v-toolbar-title>
                     </v-col>
                     <v-spacer></v-spacer>
                     <v-col cols="7" class="justify-end">
                            <v-btn @click="isDateFilterClose = !isDateFilterClose">
                                   <emojis :icon-path="iconPath" :icon-color="iconColor" width="40" height="40"></emojis>
                            </v-btn>
                     </v-col>
              </v-toolbar>
              <v-row>
                     <v-col cols="8">
                            <DateFilter v-if="isDateFilterClose" :date-picker-color="datePickerColor"
                                   :is-date-filter-close="isDateFilterClose">
                            </DateFilter>
                     </v-col>
                     <v-col cols="8">
                            <DateFilter v-if="isDateFilterClose" :date-picker-color="datePickerColor"
                                   :is-date-filter-close="isDateFilterClose">
                            </DateFilter>
                     </v-col>
              </v-row>
       </v-card>
</template>
<script setup>
import emojis from '../components/emojis.vue'
import DateFilter from '../components/DateFliter.vue'
import { ref } from 'vue'

//----------------DATA------------------
const date = ref()
// datePicker
const isDateFilterClose = ref(false)
const datePickerColor = ref('orange')

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

//--------------METHODS-----------

// const emit = defineEmits(['openDatePicker'])
// const clickedDateFilter = () => { emit('openDatePicker', props.isDateFilterOpen, console.log('salut', props.isDateFilterOpen)) }
</script>
