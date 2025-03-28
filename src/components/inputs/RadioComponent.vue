<template>
  <div>
    <div class="custom-control custom-radio" v-for="(option, index) in props.options">
      <input type="radio" class="custom-control-input" :name="'radio-'+uid" :id="'checkbox-'+uid+'-'+index" :checked="isChecked(option)">
      <label class="custom-control-label" :for="'checkbox-'+uid+'-'+index">{{ option }}</label>
    </div>
  </div>
</template>

<style scoped>
.custom-control-label::before {
  background-color: transparent;
  border: 2px solid gray;
}

.custom-control-input:checked~.custom-control-label::before {
  background-color: transparent;
}

.custom-radio .custom-control-input:checked~.custom-control-label::after {
  background-image: url('../icons/radio-checked.svg');
}

.form-check-add {
  background-color: transparent;
  width: 1.2em;
  height: 1.2em;
  border: 2px solid #9E9E9E;
  border-radius: 50%;
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