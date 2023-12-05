<template>
       <svg-icon type="mdi" :path="iconPath" :style="iconColor"></svg-icon>
</template>

<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiAccount } from '@mdi/js';
import { defineProps } from 'vue';

//----PROPS sent to ReviewButton.vue----
const props = defineProps({
       SvgIcon: {
              path: mdiAccount,
       },
       iconPath: {
              type: String, Object,
              default : '',
              required: true
       }, 
       iconColor: {
              type: Object, String,
              default: '',
              required: false,
       }
})
</script>
<style>
</style>




