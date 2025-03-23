<template>
  <input type="number" :placeholder="props.placeholder" :value="props.value"></input>
</template>

<style scoped>
input {
  border: 0;
  border-bottom: 1px solid gray;
  padding: 2px;
  outline: 0;
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