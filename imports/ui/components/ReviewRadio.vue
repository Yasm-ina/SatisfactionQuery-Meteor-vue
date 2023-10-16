<template name="ReviewRadio">
    <div>Satisfaction query : {{ checked }}</div>
    <input type="radio" v-model="checked" />
</template>


<script setup>
import { onMounted, ref } from 'vue'

const arrayToCheck = ref([{_id: 0, text: 'Very happy'},
                        {_id: 2, text: 'Average Happy'},
                        {_id: 3, text: 'Not Happy at all'},
]);
function checked() {
    switch (arrayToCheck.text) {
        case 'Very happy':
            break;
        case 'Average Happy':
            break;
        case 'Not Happy at all':
            break;
        default:
            console.log(`You are ${arrayToCheck}.`)
    }
    onMounted(() => {
        console.log(`Votre choix est ${checked()}.`)
    })
}
</script>