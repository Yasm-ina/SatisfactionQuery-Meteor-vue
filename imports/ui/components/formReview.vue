<!-- <template>
  <v-app>
    <div>
      <v-container fluid>
        <v-row no-gutters>
          <v-col cols="3" v-for="review in reviewChoices" :key="review._id" class="ma-13">
            <ReviewButton size="350" :reviewValue="review.description" :style="{ 'background-color': review.color }"
              class="rounded-circle shadowCircle text-white 
              text-lowercase font-weight-medium text-h5" />
          </v-col>
        </v-row>
      </v-container>
        <v-container fluid>
          <v-row no-gutters>
            <inputEmail :rules="rules" :email="inputContent">
            </inputEmail>
          </v-row>
            <ReviewButton type="submit" block @form-validation="checked" v-bind="props" color="white" text="Submit">
            </ReviewButton>
            <v-dialog v-model="dialog" persistent width="auto">
              <v-card>
                <v-card-title class="text-h5">
                  {{ title }}
                </v-card-title>
                <v-card-text>
                  {{ content }}
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="green-darken-1" variant="text" @click="onClose">
                    {{ closeModale }}
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
        </v-container>
    </div>
  </v-app>
</template>
<script setup>
import ReviewButton from './components/ReviewButton.vue'
import inputEmail from './components/inputEmail.vue';
import { ref } from 'vue'
import { callMethod } from 'vue-meteor-tracker';
import '../api/methods/reviewMethods.js'

const props = defineProps({
dialog
  }
})

//DATAS : 
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

//switch for value displayed 
async function checked(id) {
  try {
    console.log('allReviews', reviewChoices, id)
    //find specific review (with id AND description)
    const foundReview = reviewChoices.find((review) => review._id === id)
    console.log('reviewChoices', foundReview.color)
    //if find specific, switch specific one with id for parameter
    if (foundReview) {
      switch (foundReview._id) {
        case 0:
          selectedReview.value = foundReview.description
          await callMethod('insertReview', foundReview.description)
          console.log('[App.vue][switchMethod] id 0 :', foundReview.description);
          break;
        case 1:
          selectedReview.value = foundReview.description;
          console.log('[App.vue][switchMethod] id 1 :', foundReview.description);
          await callMethod('insertReview', foundReview.description)
          break;
        case 2:
          selectedReview.value = foundReview.description;
          console.log('[App.vue][switchMethod] id 2 :', foundReview.description);
          await callMethod('insertReview', foundReview.description)
          break;
      }
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

 -->
