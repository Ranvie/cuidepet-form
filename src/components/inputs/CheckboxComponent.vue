<template>
  <div>
    <label v-for="(option, index) in props.options" class="container">
      {{ option }}
      <input type="checkbox" :checked="isChecked(option)">
      <span class="checkmark"></span>
    </label>
    <input class="form-check-add" type="button" value="+">
  </div>
</template>

<style scoped>
label {
  width: fit-content;
}

.container {
  display: block;
  position: relative;
  padding-left: 25px;
  margin-bottom: 5px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 1em;
  color: gray;
  font-weight: 500;
}

.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 50%;
  left: 0;
  height: 1.1em;
  width: 1.1em;
  background-color: transparent;
  border: 2px solid #9E9E9E;
  border-radius: 3px;
  transform: translateY(-50%);
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: block;
}

.container .checkmark:after {
  left: 4px;
  top: 0px;
  width: 2px;
  height: 8px;
  border: solid black;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.form-check-add {
  background-color: transparent;
  width: 1.2em;
  height: 1.2em;
  border: 2px solid #9E9E9E;
  border-radius: 3px;
  cursor: pointer;
  color: gray;
  line-height: 0.6em;
  margin: 0;
  padding: 0;
}
</style>

<script setup lang="js">
import { defineProps, ref, getCurrentInstance } from 'vue';

const instance = getCurrentInstance();
const uid = ref(instance.uid);

const props = defineProps({
  placeholder: {
    default: '',
    type: String
  },
  value: {
    default: [],
    type: Array
  },
  options: {
    default: ['Nova opção'],
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

function isChecked(option) {
  return props.value.includes(option) ? true : false;
}
</script>