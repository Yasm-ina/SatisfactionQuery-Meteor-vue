<template>
    <v-container class="ma-0 pa-0">
     <v-row class="ml-10 pt-16">
        <v-col cols="2" sm="2" class="d-flex justify-start align-center ml-0" >
            <p><strong>
                votre email : 
            </strong>
            </p>
        </v-col>
            <v-col cols="10" sm="10" class="d-flex justify-center">
                <v-text-field v-model="inputValue" @keyup="getValueInput" type="text" label="email obligatoire*" :disabled="isDisabledInput" hint="johnDoe@yahoo.fr" 
                persistant-hint size="40" placeholder="e-mail" 
                 :rules="rules">
                  
                </v-text-field>
            </v-col>
    </v-row>
    </v-container>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';


const props = defineProps({
    isDisabledInput : {
        type: Boolean,
        default: true, 
        required : true 
    }
})

const inputValue = ref('')

//define regular expression for email
const rules = [
  value => {
    const exprReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    return exprReg.test(value) || 'Veuillez entrer un format valide'
  },
  value => !!value || 'Obligatoire',
  value => (value.length >= 7) || 'Min 7 characters',
]

const emit = defineEmits(['getValueInput', 'errorInput'])

/**
 * check FormatEmail, and emit success or error 
 * 
 * @param {event} event 
 * @author Yasmina and Marco
 * @function
 */
const getValueInput = (event) => {
    event.stopPropagation()
    let isValidForm = true
    let allAnswerTrue = 0
    let checkedValue= null
    for (let i = 0; i < rules.length; i++) {
        checkedValue = rules[i](inputValue.value)
        if (typeof checkedValue === 'string') isValidForm = false
        else allAnswerTrue++
    }
    console.debug('isValidForm', isValidForm)
    console.debug('allAnswerTrue', allAnswerTrue)
    if (allAnswerTrue === rules.length ) emit ('getValueInput', inputValue.value)
    if (!isValidForm) emit('errorInput')
}
</script>
