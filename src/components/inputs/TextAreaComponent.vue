<template>
  <textarea name="textarea" rows="5" cols="10" maxlength="600" :placeholder="props.placeholder" :disabled="props.mode != 'answer'">{{ props.value }}</textarea>
</template>

<style scoped>
  textarea {
    resize: none;
    padding: 10px;
    border: 0;
    border-radius: 0.4em;
    outline: 1px solid gray;
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