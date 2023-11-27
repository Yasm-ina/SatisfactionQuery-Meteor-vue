<template>
       <svg-icon type="mdi" :path="iconPath" :style="iconColor" width="140" height="140"></svg-icon>
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
              type: String,
              default : '',
              required: true
       }, 
       iconColor: {
              type: Object,
              default: '',
              required: true,
       }
})
</script>
<style>
</style>




