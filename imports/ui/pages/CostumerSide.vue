<template>
  <v-app>
    <div>
      <br><br><br>
      <strong>
        <h1 class="text-center" id="fontFamily">Satisfaction query</h1>
      </strong>
      <br>
      <br>
      <v-form>
        <v-container fluid>
          <v-row no-gutters>
            <v-col cols="3" v-for="review in reviewChoices" :key="review._id" class="ma-13">
              <ReviewButton @user-review="clicked" size="350" :review-value="review.description" :id="review._id" 
              :icon-path="review.iconPath" :is-disabled="isReviewButtonDisabled" :icon-color="{'color': review.iconColor}"
              :style="{ 'background-color': review.bgColor }" class="rounded-circle text-white text-h5">
              </ReviewButton>
            </v-col>
          </v-row>
          <v-container fluid>
            <v-row no-gutters>
              <inputEmail id="fontFamily" @getValueInput="validateEmail" @errorInput="handleInputError"
              :is-disabled-input="isInputDisabled">
            </inputEmail>
          </v-row>
          <br>
          <br>
        </v-container>
        </v-container>
      </v-form>
      <v-container fluid>
        <v-row no-gutter justify="end">
          <v-col cols="2">
            <v-btn @click="isModalOpen = true" :disabled="isSubmitButtonDisabled" color="primary">soumettre</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-dialog v-model="isModalOpen" persistent width="800">
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
          <modalHandler @validation="handleValidData" @go-back="cancelReview" :is-modal-open="isModalOpen">
          </modalHandler>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script setup>
//components
import modalHandler from "../components/modalHandler.vue"
import ReviewButton from "../components/ReviewButton.vue";
import inputEmail from "../components/inputEmail.vue";
import { mdiEmoticonHappyOutline, mdiEmoticonNeutralOutline, mdiEmoticonSadOutline } from '@mdi/js';


//vue functions
import { handleError, ref } from "vue";
//meteor
import { subscribe, callMethod } from "vue-meteor-tracker";


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
    _id: 0, description: 'très satisfait', bgColor: '#53c005', textColor: '#53c005',
     iconPath: mdiEmoticonHappyOutline, iconColor: 'rgb(34, 255, 192)'
  },
  {
    _id: 1, description: 'moyennement satisfait', bgColor: '#dfab00', textColor: '#dfab00', 
    iconPath: mdiEmoticonNeutralOutline, iconColor: 'rgb(255, 250, 106)'
  },
  {
    _id: 2, description: 'pas du tout satisfait', bgColor: '#dc143c', textColor: '#dc143c', 
    iconPath: mdiEmoticonSadOutline, iconColor: 'rgb(232, 138, 138)'
  },
];

const isReviewButtonDisabled = ref(false)
const isInputDisabled = ref(true);
const selectedReviewText = ref(false);
const userReviewColor = ref('')

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
 *  function triggered by inputEmail.vue if value
 * is checked
 * @param {String} inputEmailContent email fully checked
 * @param {Boolean} isSubmitButtonDisabled
 * @function
 * @author Yasmina and Marco
 */
const isSubmitButtonDisabled = ref(true);
const inputEmailValue = ref("");
function validateEmail(inputEmailContent) {
  console.log("[inputEmailContent]", inputEmailContent);
  inputEmailValue.value = inputEmailContent;
  isSubmitButtonDisabled.value = false;
}

/**
 * ---------SUBMIT BUTTON-----------//
 * if error found in email-button disabled
 * @param {Boolean} isSubmitButtonDisabled
 * @function
 * @author Yasmina
 */
function handleInputError() {
  isSubmitButtonDisabled.value = true;
}

//------------MODALE------------//
//Data
const isModalOpen = ref(false);
console.log("modale", isModalOpen);

//Methods
/**
 * modale's management
 * @param {Boolean} isModalOpen
 * @function
 * @author Yasmina 
 */
async function handleValidData() {
  isModalOpen.value = false;
  try {
    await callMethod('insertReview', selectedReviewText.text, inputEmailValue.value)
    console.log('done')
  } catch (e) {
    console.error(e)
  }

  subscribe('insertReview')
}

function cancelReview() {
  isModalOpen.value = false
}
</script>


<style>@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;700&display=swap');

#fontFamily {
  font-family: "Comfortaa", sans-serif;
}</style>
