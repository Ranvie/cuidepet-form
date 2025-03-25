<template>
  <input type="date" name="text" :value="props.value"></input>
</template>

<style scoped>
  input {
    padding: 5px 10px;
    border: 1px solid gray;
    border-radius: 0.4em;
  }

  input:focus {
    outline: 0;
    cursor: text;
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