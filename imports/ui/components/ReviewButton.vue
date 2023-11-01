<template>
<v-btn block rounded="xl" size="x-large" @click="displayMessage"
       class="buttonYasmina" :data-id="id">
    {{ reviewValue }}
</v-btn>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    reviewValue: {
        type: String,
        default: "",
        required: true,
    }, 
    id: {
        type:Number,
        default:0,
        required: true
    },
})
const  emit = defineEmits(['clickReview'])

const displayMessage = () => {
    emit('clickReview', props.id)
}
</script>

<style lang="scss">
  .buttonYasmina {
    background-color: aqua !important;
  }
</style>