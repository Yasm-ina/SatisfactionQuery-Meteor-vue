<template>
  <v-app>
    <div>
      <p class="text-center" id="text">Satisfaction query</p>
      <br>
      <hr>
      <v-container fluid>
        <v-row no-gutters>
          <v-col cols="3" v-for="review in reviewChoices" :key="review._id" class="ma-13">
              <ReviewButton @clickReview="checked" :reviewValue="review.description" :id="review._id" class="roundButton"/>
          </v-col>
        </v-row>
        <p v-if="selectedReview" class="d-flex text-center justify-center pa-12 ma-12"> Vous êtes &nbsp;
          <strong :class="getReviewClass(selectedReview)">{{ selectedReview }}</strong> &nbsp; de votre achat au fairStore.
        </p>
      </v-container>
    </div>
  </v-app>
</template>


<script setup>
import ReviewButton from './components/ReviewButton.vue'
import { ref } from 'vue'

//DATAS : 

//ref() : function that gives direct access to DOM
//takes the argument (null) and returns it in ref object with a .value property
// const with name that match template
const selectedReview = ref(null);

//object that is used in template (v-for), AND in find () method
const reviewChoices = [
  { _id: 0, description: 'très satisfait' },
  { _id: 1, description: 'moyennement satisfait' },
  { _id: 2, description: 'pas du tout satisfait' },
];


//METHODS:

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

.roundButton {
  border-radius: 50px;
  background-color: #858b1a;
  padding: 50px;
  width: 400px;
  height: 500px
}

#text {
  font-family: 'Comfortaa', sans-serif;
  font-size: x-large;
}

.trèssatisfait {
  color: #6bef23
}

.moyennementsatisfait {
  color: rgb(255, 180, 31)
}

.pasdutoutsatisfait {
  color: crimson
}
</style>


