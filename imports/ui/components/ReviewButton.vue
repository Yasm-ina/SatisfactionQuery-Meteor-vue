<template>
  <v-btn @click="reviewClicked" :data-id="id" :disabled="isDisabled" class="justify-center">
    <v-row class="justify-center mt-10">
      {{ reviewValue }}
      <v-container fluid>
        <br>
        <v-row class="justify-center">
          <emojis :icon-path="iconPath" :icon-color="iconColor" class="justify-content-center">
          </emojis>
        </v-row>
      </v-container>
    </v-row>
  </v-btn>
</template>
<script setup>
import {defineProps, defineEmits} from 'vue';
import emojis from './Emojis.vue'

const emit = defineEmits(['userReview'])

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
  isDisabled: {
    type: Boolean,
    default: true,
    required: true
  },
  iconPath: {
    type: String,
    default: '',
    required: true
  },
  iconColor: {
    type: Object,
    default: '',
    required: true
  }
})

const reviewClicked = () => {
  emit('userReview', props.id)
}

</script>
<style lang="scss">
$rounded: (
    'circle': 50%
);
</style>