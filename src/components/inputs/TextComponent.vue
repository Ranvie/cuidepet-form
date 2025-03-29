<template>
  <input type="text" name="text" :placeholder="props.placeholder" :value="props.value" :disabled="props.mode == 'edit' || props.mode == 'read'"></input>
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