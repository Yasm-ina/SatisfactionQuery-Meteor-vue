<template>
  <v-app>
    <div>
      <p class="text-center" id="text">Satisfaction query</p>
      <br />
      <br />
      <v-form>
        <v-container fluid>
          <v-row no-gutters>
            <v-col cols="3" v-for="review in reviewChoices" :key="review._id" class="ma-13">
              <ReviewButton @user-review="clicked" size="350" :review-value="review.description" :id="review._id"
                :is-disabled="isReviewButtonDisabled" :style="{ 'background-color': review.bgColor }"
                class="rounded-circle shadowCircle text-white text-lowercase font-weight-medium text-h5" />
            </v-col>
          </v-row>
          <v-container fluid>
            <v-row no-gutters>
              <inputEmail @getValueInput="validateEmail" @errorInput="handleInputError"
                :is-disabled-input="isInputDisabled">
              </inputEmail>
            </v-row>
            <p></p>
            <br />
            <br />
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
        <v-card-text v-for="review in reviewChoices" :key="review._id">
          <p :review-value="review.description" class="d-flex
          text-center justify-center pa-12 ma-12"> Vous êtes
            <strong :style="{ 'color': review.textColor }">{{ selectedReview }}
            </strong> de votre achat au fairStore.
          </p>
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
import modalHandler from "./components/modalHandler.vue"
import ReviewButton from "./components/ReviewButton.vue";
import inputEmail from "./components/inputEmail.vue";
import { handleError, ref } from "vue";
import { autorun } from "vue-meteor-tracker";
import "../api/methods/reviewMethods.js";

/**
 * BUTON
 * if button clicked - input is abled
 * @param {Boolean} isReviewButtonDisabled
 * @param {Boolean} isInputDisabled
 * @param {String} selectedReview
 * @function
 * @author Yasmina
 */
//object that is used in template (v-for), AND in find () method
const reviewChoices = [
  { _id: 0, description: 'très satisfait', bgColor: '#53c005', textColor: '#53c005' },
  { _id: 1, description: 'moyennement satisfait', bgColor: '#dfab00', textColor: '#53c005' },
  { _id: 2, description: 'pas du tout satisfait', bgColor: '#dc143c', textColor: '#53c005' },
];
const isReviewButtonDisabled = ref(false)
const isInputDisabled = ref(true);
const selectedReview = ref(false);
async function clicked(id) {
  try {
    //find specific review (with id AND description)
    const foundReview = reviewChoices.find((review) => review._id === id)
    console.debug('foundReview', foundReview)
    //if find specific, switch specific one with id for parameter
    if (foundReview) {
      switch (foundReview._id) {
        case 0:
          selectedReview.value = foundReview.description
          // await callMethod('insertReview', foundReview.description)
          console.debug('[App.vue][switchMethod] id 0 :', foundReview.description);
          break;
        case 1:
          selectedReview.value = foundReview.description;
          console.debug('[App.vue][switchMethod] id 1 :', foundReview.description);
          // await callMethod('insertReview', foundReview.description)
          break;
        case 2:
          selectedReview.value = foundReview.description;
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
 * INPUT EMAIL - SUBMIT BUTTON
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
 * SUBMIT BUTTON
 * if error found in email-button disabled
 * @param {Boolean} isSubmitButtonDisabled
 * @function
 * @author Yasmina
 */
function handleInputError() {
  isSubmitButtonDisabled.value = true;
}


//MODALE
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
function handleValidData(){
 isModalOpen.value = false  
}
function cancelReview(){
  isModalOpen.value = false
}







//TODO : use it to validate form connection to collections
// const userReview = autorun(() => ReviewsCollection.find({}).fetch()).result;
// const userEmail = autorun(() => UsersCollection.find({}).fetch()).result
// console.log(userReview, "collection userReview");
// console.log(userEmail, 'collection userEmail')
</script>

<style>
#text {
  font-family: "Comfortaa", sans-serif !important;
  font-size: x-large !important;
}

.shadowCircle {
  box-shadow: 0px 0px 12px 5px #e9e7a5a6 !important;
}

.trèssatisfait {
  color: #53c005;
}

.moyennementsatisfait {
  color: #dfab00;
}

.pasdutoutsatisfait {
  color: #dc143c;
}
</style>
