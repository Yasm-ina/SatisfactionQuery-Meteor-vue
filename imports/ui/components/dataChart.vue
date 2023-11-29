<template>
       <div style="width: 400px">
              <Bar :data="chartData" :options="chartOptions"/>
       </div>
</template>
     
<script setup>
//chartjs
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Legend, BarElement} from 'chart.js';
ChartJS.register(Bar, Title, Legend, BarElement);
//vue
import { defineProps, onMounted } from 'vue';

//---------PROPS-----------
const props = defineProps({
       chartData: {
              type: Object,
              required: true,
       },

       chartOptions: {
            type: Object,
              required: true,
       }
})

// const chartInstance = ref(null)
// onMounted(() => {
//        chartInstance.value = new BarChart(chartInstance.value), {
//               data: props.chartData,
//               options: props.chartOptions
//        }
// })

</script>
<style>
</style>
