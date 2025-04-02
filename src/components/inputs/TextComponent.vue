<template>
  <input type="text" name="text" :placeholder="propPlaceholder" v-model="propValue" :disabled="propMode != 'answer'"></input>
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
import { defineModel } from 'vue';

const propPlaceholder  = defineModel('placeholder', { default: '', type: String });
const propValue        = defineModel('value', { default: '', type: String });
const propOptions      = defineModel('options', { default: [], type: Array });
const propMode         = defineModel('mode', { default: 'read', type: String });
const propRequired     = defineModel('required', { default: false, type: Boolean });
const propOptionsLimit = defineModel('optionsLimit', { default: 10, type: Number });

</script>