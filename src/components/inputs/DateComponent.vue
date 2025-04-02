<template>
  <input type="date" name="text" v-model="propValue" :class="propMode != 'answer' ? 'disabled' : ''"></input>
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
import { defineModel } from 'vue';

const propPlaceholder  = defineModel('placeholder', { default: '', type: String });
const propValue        = defineModel('value', { default: '', type: String });
const propOptions      = defineModel('options', { default: [], type: Array });
const propMode         = defineModel('mode', { default: 'read', type: String });
const propRequired     = defineModel('required', { default: false, type: Boolean });
const propOptionsLimit = defineModel('optionsLimit', { default: 10, type: Number });

</script>