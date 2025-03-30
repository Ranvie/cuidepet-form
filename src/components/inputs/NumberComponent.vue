<template>
  <input type="number" :placeholder="props.placeholder" :value="props.value" :disabled="props.mode != 'answer'"></input>
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

import { defineProps } from 'vue';

const props = defineProps({
  placeholder: {
    default: '',
    type: String
  },
  value: {
    default: '',
    type: String
  },
  options: {
    default: [],
    type: Array
  },
  mode: {
    default: 'read',
    type: String
  },
  required: {
    default: false,
    type: Boolean
  }
});
</script>