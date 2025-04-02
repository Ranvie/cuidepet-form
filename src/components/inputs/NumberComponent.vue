<template>
  <input type="number" :placeholder="propPlaceholder" v-model="propValue" :disabled="propMode != 'answer'"></input>
</template>

<style scoped>
input {
  border: 1px solid gray;
  border-radius: 5px;
  padding: 2px;
  outline: 0;
  padding: 10px;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
   opacity: 1;
}
</style>

<script setup lang="js">
import { defineModel } from 'vue';

const propPlaceholder  = defineModel('placeholder', { default: '', type: String });
const propValue        = defineModel('value', { default: '', type: [Number, String] });
const propOptions      = defineModel('options', { default: [], type: Array });
const propMode         = defineModel('mode', { default: 'read', type: String });
const propRequired     = defineModel('required', { default: false, type: Boolean });
const propOptionsLimit = defineModel('optionsLimit', { default: 10, type: Number });

</script>