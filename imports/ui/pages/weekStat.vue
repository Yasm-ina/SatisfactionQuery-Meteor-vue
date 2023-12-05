<template>
       <weekStat :chart-data="dataWeekValues" :chart-options="dataOptions"></weekStat>
</template>
<script setup>
import weekStat from '../components/weekStat.vue';
//vue
import { ref, computed } from 'vue';

//------------------DATAS---------------------
const dataWeekValues = ref({
       labels: ["très satisfait", "moyennement satisfait", "pas du tout satisfait"],
       datasets: [{
              data: [30, 40, 60],
              label: 'Statistiques hebdomadaire'
       }],
});
console.log('dataValueNumbers', dataWeekValues.value)


// const dataOptions = ref({responsive: true });
// console.log('dataValueReview', dataOptions.value)

const dataOptions = computed(() => {
       return { height: `${2000}px`, position: 'relative', backgroundColor: 'rgb(255, 99, 132)' }
})
console.log('dataOptions', dataOptions)
//--------------COMPUTED DATAS------------------
// const barChartDataChanged = computed (() => {
// console.log('dataHasChanged', barChartDataChanged)
//      return chartData.labels.length
//      })
</script>
       
<style></style>