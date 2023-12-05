<template>
   <v-card class="mx-auto" rounded="50">
       <v-toolbar>
                     <v-col cols="6" class="justify-start">
                            <v-toolbar-title>filtrer par date: </v-toolbar-title>
                     </v-col>
                     <v-spacer></v-spacer>
                     <v-col cols="7" class="justify-end">
                            <v-btn @click="clickedDateFilter">
                                   <emojis :icon-path="iconPath" :icon-color="iconColor" width="40" height="40"></emojis>
                            </v-btn>
                     </v-col>
       </v-toolbar>
              <DateFilter :show-week="true" :is-date-filter-open="isDateFilterOpen" :date-picker-color="datePickerColor">
              </DateFilter>
    </v-card>
</template>
<script setup>
import emojis from '../components/emojis.vue'
import DateFilter from '../components/DateFliter.vue'
import { defineProps, defineEmits, ref } from 'vue'

//----------------DATA------------------
const datePickerColor = ref('orange')

//-----------PROPS--------------
const props = defineProps({
       iconPath: {
              type: String,
              default: '',
              required: true
       },
       isDateFilterOpen: {
              type: Boolean,
              default: false,
              required: true,
       },
       iconColor: {
              type: Object,
              default: '',
              required: false
       }
})

//--------------METHODS-----------

const emit = defineEmits(['openDatePicker'])
const clickedDateFilter = () => { emit('openDatePicker', props.isDateFilterOpen, console.log('salut', props.isDateFilterOpen)) }


</script>
