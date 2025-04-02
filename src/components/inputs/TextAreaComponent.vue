<template>
  <textarea name="textarea" rows="5" cols="10" maxlength="600" :placeholder="propPlaceholder" :disabled="propMode != 'answer'" v-model="propValue"></textarea>
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

import { defineModel } from 'vue';

const propPlaceholder  = defineModel('placeholder', { default: '', type: String });
const propValue        = defineModel('value', { default: '', type: String });
const propOptions      = defineModel('options', { default: [], type: Array });
const propMode         = defineModel('mode', { default: 'read', type: String });
const propRequired     = defineModel('required', { default: false, type: Boolean });
const propOptionsLimit = defineModel('optionsLimit', { default: 10, type: Number });

</script>