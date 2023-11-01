<template>
<v-btn size="300" rounded="" @click="displayMessage" :data-id="id" 
class="elevation-10">
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
<style>
</style>
