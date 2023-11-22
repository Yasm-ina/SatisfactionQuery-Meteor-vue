<template>
  <div fluid>
    <v-card>
      <v-card-actions>
        <v-row justify="start">
          <v-col cols="6">
            <v-btn v-model="isModalOpen" @click="handleSubmit" class="bg-teal-accent-1" color="teal-darken-2" block variant="text">
              Je valide
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn v-model="isModalOpen" @click="handleCancel" class="bg-red-accent-1" color="white" block variant="text">
              revenir
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";

//--------PROPS----------
const props = defineProps({
  isModalOpen: {
    type    : Boolean,
    default : false,
    required: true,
  },
});

//----------DATA------------
const isModalOpen = ref(true);
console.log("[componentModaHandler], [emitBoolOutsideModal]", isModalOpen.value);

  //-------EMITS METHODS---------
const handleCancel = () => {
  isModalOpen.value = false;
  emit("goBack");
  console.log("[componentModaleHandler],[methodEmitHandleCancel], [emitBoolCancel]", isModalOpen.value);
};

const handleSubmit = () => {
  isModalOpen.value = false;
  emit("validation")
    console.log("[componentModalHandler],[modalHandler] [methodEmitHandleSubmit], [emitBoolValidate]", isModalOpen.value);
};
const emit = defineEmits(["validation", "goBack"]);
</script>

<style></style>
