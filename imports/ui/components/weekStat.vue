<template>
       <div>
       <Bar :data="chartData" :options="chartOptions"/>
       </div>
</template>
     
<script setup>
// //chartjs
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'//vue
import { defineProps, onMounted } from 'vue';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

//---------PROPS-----------
const props = defineProps({
       chartData: {
              type: Object,
              required: true,
       },
       chartOptions: {
              type: Object,
       },
})


</script>
<style></style>
