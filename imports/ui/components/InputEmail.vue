<template>
  <v-container class="ma-0 pa-0">
    <v-row class="ml-10 pt-16">
      <v-col cols="2" sm="2" class="d-flex justify-start align-center ml-0">
        <p><strong>
          votre email :
        </strong>
        </p>
      </v-col>
      <v-col cols="10" sm="10" class="d-flex justify-center">
        <v-text-field v-model="inputValue" @keyup="getValueInput" label="email obligatoire*"
                      :disabled="isDisabledInput" hint="johnDoe@yahoo.fr" persistant-hint size="40" placeholder="e-mail"
                      :rules="rules">
        </v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import {defineProps, defineEmits, ref} from 'vue';

const props = defineProps({
  isDisabledInput: {
    type: Boolean,
    default: true,
    required: true
  },
})

const inputValue = ref('')

//check format email with regular expression, length and if not empty input
const rules = [
  value => {
    const exprReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    return exprReg.test(value) || 'Veuillez entrer un format valide'
  },
  value => !!value || 'Obligatoire',
  value => (value.length >= 7) || 'Min 7 characters']

/**
 * when key is released
 * check FormatEmail and emit success or error
 * @param {event} event
 * @author Yasmina and Marco
 * @function
 */
const getValueInput = (event) => {
  event.stopPropagation()
  let isValidForm = true
  //tells if 0 or 1 or 2 of ErrorCases are true
  let allAnswerTrue = 0
  let checkedValue = null
  for (let i = 0; i < rules.length; i++) {
    checkedValue = rules[i](inputValue.value)
    if (typeof checkedValue === 'string') isValidForm = false
    else allAnswerTrue++
    console.debug('[inputEmail][getValueInput] checkedValue', checkedValue)
    console.debug('[inputEmail][getValueInput] isValidForm', isValidForm)
    console.debug('[inputEmail][getValueInput] allAnswerTrue-index in array', allAnswerTrue)
  }
  if (allAnswerTrue === rules.length) emit('getValueInput', inputValue.value)
  if (!isValidForm) emit('errorInput')
}

//emit 
const emit = defineEmits(['getValueInput', 'errorInput'])
</script>
