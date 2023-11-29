<template>
  <v-app>
    <br><br><br>
    <strong>
      <h1 class="text-center" id="fontFamily">Satisfaction query</h1>
    </strong>
    <br>
    <br>
    <v-container>
      <v-row>
        <v-col cols="4" v-for="review in reviewChoices" :key="review._id" class="text-xs-center">
          <ReviewButton @user-review="clicked"
                        size="350"
                        :review-value="review.description"
                        :id="review._id"
                        :icon-path="review.iconPath"
                        :is-disabled="isReviewButtonDisabled"
                        :icon-color="{'color': review.iconColor}"
                        :style="{ 'background-color': review.bgColor }"
                        class="rounded-circle text-white text-h5"/>
        </v-col>
      </v-row>
      <v-row>
        <InputEmail id="fontFamily" @getValueInput="validateEmail" @errorInput="handleInputError"
                    :is-disabled-input="isInputDisabled"/>
      </v-row>
      <v-row justify="end">
        <v-col cols="2">
          <v-btn @click="showModal()" :disabled="isSubmitButtonDisabled" color="primary">soumettre</v-btn>
        </v-col>
      </v-row>
    </v-container>
<!--    <v-dialog v-model="isModalOpen" persistent width="800">
      <v-card>
        <v-card-text class="mx-9 pt-12 pb-7">
          <p id="fontFamily">Merci d'avoir effectué votre achat au FairStore !</p><br><br>
          <p id="fontFamily" class="d-flex text-center justify-start"><strong>Vous êtes &nbsp;
            <strong :style="{ 'color': userReviewColor }">{{ selectedReviewText }}
            </strong> &nbsp;de votre achat au fairStore.</strong>
            <br><br><br>
          </p>
          <p class="d-flex text-center justify-start" id="fontFamily">
            Votre email est : &nbsp;<strong>{{ inputEmailValue }}</strong>&nbsp;</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer>
          </v-spacer>
          <ModalHandler @validation="handleValidData" @go-back="cancelReview" :is-modal-open="isModalOpen"/>
        </v-card-actions>
      </v-card>
    </v-dialog>-->

    <Modal ref="recapModal"
           :user-review-color="userReviewColor"
           :selected-review-text="selectedReviewText"
           :input-email-value="inputEmailValue"
           @validation="handleValidData"
    />
  </v-app>
</template>

<script setup>
//components
import Modal from "../components/Modal.vue"
import ReviewButton from "../components/ReviewButton.vue";
import InputEmail from "../components/InputEmail.vue";
import {mdiEmoticonHappyOutline, mdiEmoticonNeutralOutline, mdiEmoticonSadOutline} from '@mdi/js';

//vue functions
import {ref} from "vue";

//meteor
import {subscribe, callMethod} from "vue-meteor-tracker";


/**
 * -------BUTONS REVIEW----------
 * if button clicked - input is abled
 * @param {Boolean} isReviewButtonDisabled
 * @param {Boolean} isInputDisabled
 * @param {String} selectedReview
 * @function
 * @author Yasmina
 */
//object used in template (v-for), AND in find () method
const reviewChoices = [
  {
    _id: 0,
    description: 'très satisfait',
    bgColor: '#53c005',
    textColor: '#53c005',
    iconPath: mdiEmoticonHappyOutline,
    iconColor: 'rgb(34, 255, 192)'
  },
  {
    _id: 1,
    description: 'moyennement satisfait',
    bgColor: '#dfab00',
    textColor: '#dfab00',
    iconPath: mdiEmoticonNeutralOutline,
    iconColor: 'rgb(255, 250, 106)'
  },
  {
    _id: 2,
    description: 'pas du tout satisfait',
    bgColor: '#dc143c',
    textColor: '#dc143c',
    iconPath: mdiEmoticonSadOutline,
    iconColor: 'rgb(232, 138, 138)'
  },
];

const isReviewButtonDisabled = ref(false)
const isInputDisabled = ref(true);
const selectedReviewText = ref('');
const userReviewColor = ref('')
const isSubmitButtonDisabled = ref(true);
const inputEmailValue = ref("");

// reference to the modal
const recapModal = ref(null);

/**------DISPLAY OF TEXT REVIEW AND TEXT COLOR----------
 * method that gives values of specific UserChoice : textOfReview (selectedReviewText.value)
 * and colorOfTextReview (userReviewColor.value)
 * @function
 * @param {Number} id
 * @author Yasmina
 */
async function clicked(id) {
  try {
    //find specific review (by id)
    const foundReview = reviewChoices.find((review) => review._id === id)
    console.debug('foundReview', foundReview)
    //if find specific, switch specific one with id for parameter
    if (foundReview) {
      switch (foundReview._id) {
        case 0:
          selectedReviewText.value = foundReview.description;
          userReviewColor.value = foundReview.textColor
          console.log('colorText', userReviewColor)
          // reviewColorChoice = foundReview.textColor
          console.debug('[App.vue][switchMethod] id 0 :', foundReview.description);
          break;
        case 1:
          selectedReviewText.value = foundReview.description;
          userReviewColor.value = foundReview.textColor
          console.log('colorText', userReviewColor)
          console.debug('[App.vue][switchMethod] id 1 :', foundReview.description);
          // await callMethod('insertReview', foundReview.description)
          break;
        case 2:
          selectedReviewText.value = foundReview.description;
          userReviewColor.value = foundReview.textColor
          console.log('colorText', userReviewColor)
          console.debug('[App.vue][switchMethod] id 2 :', foundReview.description);
          // await callMethod('insertReview', foundReview.description)
          break;
      }
      isInputDisabled.value = false
    }
  } catch (e) {
    console.error(e)
  }
}

/**
 * --------INPUT EMAIL - SUBMIT BUTTON----------
 *  function triggered by InputEmail.vue if value
 * is checked
 * @param {String} inputEmailContent email fully checked
 * @function
 * @author Yasmina and Marco
 */
function validateEmail(inputEmailContent) {
  console.log("[inputEmailContent]", inputEmailContent);
  inputEmailValue.value = inputEmailContent;
  isSubmitButtonDisabled.value = false;
}

/**
 * ---------SUBMIT BUTTON-----------//
 * if error found in email-button disabled
 * @function
 * @author Yasmina
 */
function handleInputError() {
  isSubmitButtonDisabled.value = true;
}

//Methods
/**
 * modale's management
 * @function
 * @author Yasmina
 */
async function handleValidData() {
  try {
    console.log('HandleValidateData')
    await callMethod('insertReview', selectedReviewText.value, inputEmailValue.value)
    console.log('done')
  } catch (e) {
    console.error(e)
  }
  //subscribe('insertReview')
}

function showModal() {
  recapModal.value.showModal()
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;700&display=swap');

#fontFamily {
  font-family: "Comfortaa", sans-serif;
}</style>
