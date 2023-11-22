<template>
    <v-btn @click="reviewClicked" :data-id="id" :disabled="isDisabled">
        <!-- <icon icon="iconReview"/> -->
        {{ reviewValue }}
    </v-btn>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    reviewValue: {
        type    : String,
        default : "",
        required: true,
    },
    id: {
        type    : Number,
        default : 0,
        required: true
    },
    isDisabled: {
        type    : Boolean,
        default : true,
        required: true
    },
})

const emit = defineEmits(['userReview'])
const reviewClicked = () => { emit('userReview', props.id)}

</script>
<style lang = "scss">
$rounded: 
('circle': 50%);
</style>