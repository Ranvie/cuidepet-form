<template>
  <input type="text" name="text" :placeholder="props.placeholder" :value="props.value"></input>
</template>

<style scoped>
input {
  border-bottom: 0.5 solid black;
  padding: 13px;
}
</style>

<script setup lang="js">

import { defineProps } from 'vue';

const props = defineProps({
  placeholder: {
    type: String
  },
  value: {
    type: String
  },
  mode: {
    type: String
  }
});
</script>