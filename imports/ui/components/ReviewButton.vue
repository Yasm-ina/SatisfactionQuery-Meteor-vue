<template>
    <v-btn size="350" @click="displayModal" :data-id="id">
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
        type: Number,
        default: 0,
        required: true
    },
})

const emit = defineEmits(['formValidation'])
const displayModal = () => {
    emit('formValidation', props.id)
}
</script>
<style lang="scss">
$rounded: (
    'circle': 50%
);
</style>