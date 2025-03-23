<template>
  <div class="select">
    <select name="" class="">
      <option class="default" value="" disabled selected hidden>{{ props.placeholder }}</option>
      <option v-for="(option, index) in props.options" :value="option">{{ option }}</option>
    </select>
  </div>
</template>

<style scoped>
#dropdown-input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

select {
  border: 1px solid gray;
  border-radius: 7px;
  padding: 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding-left: 10px !important;
  padding-right: 20%;
  text-indent: 0.01px;
  width: 100%;
}

select:hover {
  cursor: pointer;
}

select:focus {
  outline: 0;
}

.select::after {
  content: "▼";
  position: absolute;
  transform: translate(-20px, 10px);
  pointer-events: none;
  font-size: 14px;
  color: #333;
}

option {
  color: black;
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