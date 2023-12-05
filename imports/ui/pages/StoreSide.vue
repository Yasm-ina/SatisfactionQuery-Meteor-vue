<template>
<menuHeader @open-date-picker="clickOpenDatePicker" :icon-path="iconCalendarPath" :icon-color="iconColor" :is-date-filter-open="isDateFilterOpen"></menuHeader>
<div>
<weekStat :chart-data="dataWeekValues" :chart-options="dataOptions"></weekStat>
</div>
</template>

<script setup>
import menuHeader from '../components/menuHeader.vue';
import weekStat from '../components/weekStat.vue'
import { mdiCalendarMonthOutline } from '@mdi/js';
import { ref, computed } from 'vue'


//------------------DATAS---------------------

const iconColor = ref({ 'color': 'black' })
const iconCalendarPath = ref(mdiCalendarMonthOutline);

const dataWeekValues = ref({
       labels: ["très satisfait", "moyennement satisfait", "pas du tout satisfait"],
       datasets: [{
              data: [30, 40, 60],
              label: 'Statistiques hebdomadaire'
       }],
});
console.log('dataValueNumbers', dataWeekValues.value)

const dataOptions = computed(() => {
       return { height: `${2000}px`, position: 'relative', backgroundColor: 'rgb(255, 99, 132)' }
})
console.log('dataOptions', dataOptions)


//date pickerOpenState
const isDateFilterOpen = ref(false)
function clickOpenDatePicker () {
       isDateFilterOpen.value = true
}
</script>
<style>
</style>
