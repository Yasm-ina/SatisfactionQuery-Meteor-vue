<template name="App">
  <div>
    <v-app>
      <v-container fluid>
        <v-row>
            <v-col col="12">
              <Review />
            </v-col>
            <v-col col="12">
              <Review />
            </v-col>
            <v-col col="12">
              <Review />
            </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>


<script>
import { ref } from 'vue';
import './components/ReviewRadio.vue';


//DATAS


// const showMessage = computed(() => {
//   switch (selectedOption.value) {
//     case 'option 1':
//       return "Vous avez selectionné l'option 1.";
//     case 'option 2':
//       return "Vous avez selectionné l'option 2";
//     case 'option 3':
//       return "Vous avez selectionné l'option 3";
//     default:
//       return '';
//   }
// })
return {
  selectedOption,
  showMessage,
}
</script>


