<template>
  <input type="date" name="text" :value="props.value" :class="props.mode != 'answer' ? 'disabled' : ''"></input>
</template>

<style scoped>
input {
  padding: 5px 10px;
  border: 1px solid gray;
  border-radius: 0.4em;
  font-size: 0.8rem;
}

input:focus {
  outline: 0;
  cursor: text;
}

input[type="date"].disabled {
    pointer-events: none;
    background-color: #fafafa;
    color: #666;
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