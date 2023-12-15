<template>
       <menuHeader :icon-path="iconCalendarPath" :icon-color="iconColor" :date-begin-array="dateBeginArray"
              :date-end-array="dateEndArray" 
              @update:date-begin-array="dateUpdateBeginArray"
              @update:date-end-array="dateUpdateEndArray">
       </menuHeader>
       <div>
              <weekStat :chart-data="dataWeekValues" :chart-options="dataOptions"></weekStat>
       </div>
</template>
<script setup>
import menuHeader from '../components/menuHeader.vue';
import weekStat from '../components/weekStat.vue'
import { mdiCalendarMonthOutline } from '@mdi/js';
import { ref, computed } from 'vue'

//--------------------Dates Arrays----------------------
const dateBeginArray = ref([])
console.log('MODEL', dateBeginArray.value)
const dateEndArray = ref([])
console.log('MODEL', dateEndArray.value)

const dateUpdateBeginArray = (newArrayBegin) => {
       dateBeginArray.value = newArrayBegin
       console.log('Updated dateBeginArray', newArrayBegin)
}
const dateUpdateEndArray = (newArrayEnd) => {
       dateEndArray.value = newArrayEnd
       console.log('updated dateEndArray', newArrayEnd)
}

function getLastArrayElement(array){
let lastBeginDateSelected = dateUpdateBeginArray[dateUpdateBeginArray.newArrayBegin.length-1];
let lastEndDateSelected = dateUpdateEndArray[dateUpdateEndArray.newArrayEnd.length-1]
console.log('LastBeginDateSelected', lastBeginDateSelected)
console.log('lastEndDateSelected', lastEndDateSelected)
}
// function calculTimeFrame(){

// }

//-----------------------DATAS---------------------------
const iconColor = ref({ 'color': 'black' })
const iconCalendarPath = ref(mdiCalendarMonthOutline);



const dataWeekValues = ref({
       labels: ["très satisfait", "moyennement satisfait", "pas du tout satisfait"],
       datasets: [{
              data: [30, 40, 60],
              label: 'Statistiques hebdomadaire'
       }],
});
console.log('[StoreSide], [StatsReview], dataValueNumbers', dataWeekValues.value)

const dataOptions = computed(() => {
       return { height: `${2000}px`, position: 'relative', backgroundColor: 'rgb(255, 99, 132)' }
})
</script>

<style></style>
