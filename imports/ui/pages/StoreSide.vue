<template>
       <dataChart :chart-data="dataValues" :chart-options="dataOptions"></dataChart>
</template>


<script setup>
import dataChart from '../components/dataChart.vue';
//vue
import { ref, computed } from 'vue';


//------------------DATAS---------------------
const dataValues = ref({
       datasets:{data: [30, 40, 60]},
       labels: ["très satisfait", "moyennement satisfait", "pas du tout satisfait"]
});
console.log('dataValueNumbers', dataValues.value)
const dataOptions = ref({responsive: true});
console.log('dataValueReview', dataOptions.value)


//--------------COMPUTED DATAS------------------
// const barChartDataChanged = computed (() => {
// console.log('dataHasChanged', barChartDataChanged)
//      return chartData.labels.length
//      })
</script>
       
<style>
</style>