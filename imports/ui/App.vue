<template>
  <v-app>
    <div>
      <p class="text-center" id="text">Satisfaction query</p>
      <br>
      <br>
      <v-form>
        <v-container fluid>
          <v-row no-gutters>
            <v-col cols="3" v-for="review in reviewChoices" :key="review._id" class="ma-13">
              <ReviewButton @user-review="checked" size="350" :review-value="review.description" :id="review._id"
                :is-disabled="isReviewButtonDisabled" :style="{ 'background-color': review.bgColor }"
                class="rounded-circle shadowCircle text-white text-lowercase font-weight-medium text-h5" />
            </v-col>
          </v-row>
          <v-container fluid>
            <v-row no-gutters>
              <inputEmail @getValueInput="validateEmail" @errorInput="handleInputError" :is-disabled-input="isInputDisabled" >
              </inputEmail>
            </v-row>
            <p ></p>
            <br>
            <br>
            <br>
            //TOTEST- goal : in modal repeat email
            <v-text-field v-model="textA" placeholder="email"></v-text-field>
            <p>le texte est : {{ textA }}</p>
        
           
            
          </v-container>
        </v-container>
      </v-form>
      <v-container fluid>
        <v-row no-gutter justify="end">
          <v-col cols="2">
            <v-btn @click="modalStateDialog = true" :disabled="isSubmitButtonDisabled" color="primary">soumettre</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-dialog v-model="modalStateDialog" persistent width="800">
      <v-card>
        <v-card-text v-for="review in reviewChoices" :key="review._id" class="bg-pink-lighten-3">
          <p :review-value="review.description" class="d-flex
          text-center justify-center pa-12 ma-12"> Vous êtes
            <strong :style="{ 'color': review.textColor }">{{ selectedReview }}
            </strong> de votre achat au fairStore.
          </p>
        </v-card-text>
        <v-card-actions>
          <v-spacer>

          </v-spacer>
          <v-btn color="blue-darken-1" block variant="text" @click="modalStateDialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script setup>
import ReviewButton from './components/ReviewButton.vue'
import inputEmail from './components/inputEmail.vue';
import { handleError, ref } from 'vue'
import { autorun } from 'vue-meteor-tracker'
import ReviewsCollection from "../dbCollections/reviewsCollection.js";
import UsersCollection from '../dbCollections/usersCollection.js'
import { callMethod, subscribe } from 'vue-meteor-tracker';
import '../api/methods/reviewMethods.js'

//DATAS : 
const textA = ref('')
console.log('textValue', textA.value)



const inputEmailValue = ref('');


//TODO : use it to validate form connection to collections 
const userReview = autorun(() => ReviewsCollection.find({}).fetch()).result
// const userEmail = autorun(() => UsersCollection.find({}).fetch()).result
console.log(userReview, 'collection userReview')
// console.log(userEmail, 'collection userEmail')

//isDisabled
const isReviewButtonDisabled = ref(false)
const isSubmitButtonDisabled = ref(true)
const isInputDisabled = ref(true)


function handleInputError () {
isSubmitButtonDisabled.value= true
}

/**
 * this function is triggered by inputEmail.vue if the value 
 * is checked 
 * @param {String} inputEmailContent email fully checked
 * @function 
 * @author Yasmina and Marco
 */
function validateEmail(inputEmailContent) {
  console.log('[inputEmailContent]', inputEmailContent)
  inputEmailValue.value = inputEmailContent 
    isSubmitButtonDisabled.value = false
}

//modale 
const modalStateDialog = ref(false)
console.log('modale', modalStateDialog)

//ref() : = reviewChoices.description
const selectedReview = ref(false);

//object that is used in template (v-for), AND in find () method
const reviewChoices = [
  { _id: 0, description: 'très satisfait', bgColor: '#53c005', textColor: '#53c005' },
  { _id: 1, description: 'moyennement satisfait', bgColor: '#dfab00', textColor: '#53c005' },
  { _id: 2, description: 'pas du tout satisfait', bgColor: '#dc143c', textColor: '#53c005' },
];



subscribe('insertReviews')
subscribe('insertEmail')



//switch for value displayed 
async function checked(id) {
  try {
    //find specific review (with id AND description)
    const foundReview = reviewChoices.find((review) => review._id === id)
    console.log('foundReview', foundReview)

    //if find specific, switch specific one with id for parameter
    if (foundReview) {
      switch (foundReview._id) {
        case 0:
          selectedReview.value = foundReview.description
          // await callMethod('insertReview', foundReview.description)
          console.log('[App.vue][switchMethod] id 0 :', foundReview.description);
          break;
        case 1:
          selectedReview.value = foundReview.description;
          console.log('[App.vue][switchMethod] id 1 :', foundReview.description);
          // await callMethod('insertReview', foundReview.description)
          break;
        case 2:
          selectedReview.value = foundReview.description;
          console.log('[App.vue][switchMethod] id 2 :', foundReview.description);
          // await callMethod('insertReview', foundReview.description)
          break;
      }
      isInputDisabled.value = false
    }
  } catch (e) {
    console.error(e)
  }
}
</script>
<style>
#text {
  font-family: 'Comfortaa', sans-serif !important;
  font-size: x-large !important;
}

.shadowCircle {
  box-shadow: 0px 0px 12px 5px #e9e7a5a6 !important;
}

.trèssatisfait {
  color: #53c005
}

.moyennementsatisfait {
  color: #dfab00
}

.pasdutoutsatisfait {
  color: #dc143c
}
</style>


