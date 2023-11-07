<template>
  <v-app>
    <div>
      <p class="text-center" id="text">Satisfaction query</p>
      <br>
      <br>
      <v-container fluid>
        <v-row no-gutters>
          <v-col cols="3" v-for="review in reviewChoices" :key="review._id" class="ma-13">
            <ReviewButton @clickReview="checked" :reviewValue="review.description" :id="review._id"
              :style="{ 'background-color': review.color }"
              class="rounded-circle shadowCircle text-white text-lowercase font-weight-medium text-h5" />
          </v-col>
        </v-row>
        <v-container fluid>
          <v-row no-gutters>
            <inputEmail :rules="rules" :email="inputContent">
            </inputEmail>
          </v-row>
        </v-container>
        <p v-if="selectedReview" class="d-flex text-center justify-center pa-12 ma-12"> Vous êtes &nbsp;
          <strong :class="getReviewClass(selectedReview)">{{ selectedReview }}</strong> &nbsp; de votre achat au
          fairStore.
        </p>
      </v-container>
    </div>
  </v-app>
</template>


<script setup>
import ReviewButton from './components/ReviewButton.vue'
import inputEmail from './components/inputEmail.vue';
import { useQuerySatisfactionStore } from './libs/pinia.js';
import { ref } from 'vue'
import { inject } from 'vue'


//DATAS : 
export const useQuerySatisfactionStore = defineStore('insertReview', () => {
  const store = inject('insertEmail')


  
  //define regular expression for email
const rules = ref([
  value => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value) || 'Veuillez entrer un format valide',
  value => !!value || 'Obligatoire',
  value => (value.length >= 7) || 'Min 7 characters',
]);
console.log('format Email', rules.value)


//ref() : function that gives direct access to DOM
//takes the argument (null) and returns it in ref object with a .value property
// const with name that match template
const selectedReview = ref(null);

const inputContent = ref('');


//object that is used in template (v-for), AND in find () method
const reviewChoices = [
  { _id: 0, description: 'très satisfait', color: '#53c005' },
  { _id: 1, description: 'moyennement satisfait', color: '#dfab00' },
  { _id: 2, description: 'pas du tout satisfait', color: '#dc143c' },
];


//METHODS:
const insertEmail = new ValidateMethod({
  name: 'methods.insertReview',
  validate: new SimpleSchema({
    email: { type: String, regEx: rules.value },
  }).validator(),
  run(email) {
    // In here, we can be sure that the newInvoice argument is validated
    if (!this.emailId) {
      throw new Meteor.Error('[Invoices.methods.insert]', rules.value)
    }
    Invoices.insert(newInvoice)
  }
})
})

function getReviewClass(review) {
  //regexp seach spaces to use as class name in css
  //generate valid nameClass css 
  return review.replace(/\s/g, '')
};

//switch for value displayed 
function checked(id) {
  console.log('allReviews', reviewChoices, id)
  //find specific review (with id AND description)
  const foundReview = reviewChoices.find((review) => review._id === id)
  console.log('reviewChoices', foundReview.color)
  //if find specific, switch specific one with id for parameter
  if (foundReview) {
    switch (foundReview._id) {
      case 0:
        selectedReview.value = foundReview.description
        console.log('[App.vue][switchMethod] id 0 :', foundReview.description);
        break;
      case 1:
        selectedReview.value = foundReview.description;
        console.log('[App.vue][switchMethod] id 1 :', foundReview.description);
        break;
      case 2:
        selectedReview.value = foundReview.description;
        console.log('[App.vue][switchMethod] id 2 :', foundReview.description);
        break;
    }
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


