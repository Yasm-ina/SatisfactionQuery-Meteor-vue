<template>
       <v-container fluid>
              <v-row class="bg-teal-lighten-5">
                     <v-col cols="6">
                            <router-link to="/">CostumerSide</router-link>
                     </v-col>
                     <v-col cols="6">
                            <router-link to="/Store">StoreSide</router-link>
                     </v-col>
                     <br><br><br>
              </v-row>
              <router-view>
              </router-view>
       </v-container>
</template>
<script>
</script>