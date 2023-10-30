<template>
  <v-app>
    <div>
        <p class="text-h5 font-weight-light text-center">Satisfaction query</p>
        <br>
        <hr>
      <v-container fluid>
        <v-row no-gutters>
          <v-col cols="3" v-for="review in reviewChoices" :key="review._id" class="ma-13">
            <v-card v-ripple>
              <v-card-actions>
                <ReviewButton @clickReview="checked" :reviewValue="review.description" :id="review._id"/>
              </v-card-actions>
            </v-card>
            </v-col>
        </v-row>
        <p class="d-flex text-center justify-center pa-12 ma-12"> You are <strong> {{ selectedReview }} </strong> with your purchase from our store.</p>
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
  { _id: 0, description: 'Very happy' },
  { _id: 1, description: 'Average Happy' },
  { _id: 2, description: 'Not Happy at all' },
]


//METHODS:
function checked(id) {
  console.log('allReviewId', reviewChoices, id)
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
</style>


