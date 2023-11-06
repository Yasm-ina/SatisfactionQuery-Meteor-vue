<template>
    <v-container class="ma-0 pa-0">
     <v-row class="ml-10 pt-16">
        <v-col cols="2" sm="2" class="d-flex justify-start align-center ml-0" >
            <p>
               votre email : 
            </p>
        </v-col>
            <v-col cols="10" sm="10" class="d-flex justify-center">
                <v-text-field  size="40" placeholder="e-mail" hide-details="auto" :rules="rules">
                    {{ email }}
                </v-text-field>
            </v-col>
    </v-row>
    </v-container>
</template>

<script setup>
import { defineProps,  } from 'vue';


const props = defineProps({
    email: {
        type: String,
        default: "", 
        required: true,
    },

    rules: {
        type: Array, String, RegExp,
        default: "",
        required: true,
    }
})

</script>
