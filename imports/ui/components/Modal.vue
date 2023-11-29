<template>
  <v-dialog v-model="isModalOpen" persistent width="800">
    <v-card>
      <v-card-text class="mx-9 pt-12 pb-7">
        <p id="fontFamily">Merci d'avoir effectué votre achat au FairStore !</p>
        <br>
        <br>
        <p id="fontFamily" class="d-flex text-center justify-start">
          <strong>Vous êtes &nbsp;
            <strong :style="{ 'color': userReviewColor }">
              {{ selectedReviewText }}
            </strong>
            &nbsp;de votre achat au fairStore.</strong>
          <br><br><br>
        </p>
        <p class="d-flex text-center justify-start" id="fontFamily">
          Votre email est : &nbsp;<strong>{{ inputEmailValue }}</strong>&nbsp;</p>
      </v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-row justify="start">
          <v-col cols="6">
            <v-btn @click="handleSubmit()" class="bg-teal-accent-1" color="teal-darken-2" block
                   variant="text">
              Je valide
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn @click="handleCancel()" class="bg-red-accent-1" color="white" block
                   variant="text">
              revenir
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import {defineProps, ref} from "vue";

const emit = defineEmits(["validation"]);

//--------PROPS----------
const props = defineProps({
  inputEmailValue: {
    type: String,
    default: '',
    required: true
  },
  selectedReviewText: {
    type: String,
    default: '',
    required: true
  },
  userReviewColor: {
    type: String,
    default: '',
    required: true
  }
});


//----------DATA------------
const isModalOpen = ref(false);

//-------EMITS METHODS---------
const handleCancel = () => {
  console.log("[componentModaleHandler],[methodEmitHandleCancel], [emitBoolCancel]", isModalOpen.value);
  hideModal();
};

const handleSubmit = () => {
  hideModal();
  emit("validation")
  console.log("[componentModalHandler],[modalHandler] [methodEmitHandleSubmit], [emitBoolValidate]", isModalOpen.value);
};

const showModal = () => {
  isModalOpen.value = true
}

const hideModal = () => {
  isModalOpen.value = false
}

defineExpose({
  showModal
})
</script>

<style></style>
