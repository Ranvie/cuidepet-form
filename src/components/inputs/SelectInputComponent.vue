<template>
  <div>
    <select name="select-input" @change="emits('changeInput', $event.target.value)">
      <option v-for="(option, index) in options" :value="option.value" :selected="option.value == props.type">{{ option.text }}</option>
    </select>
  </div>
</template>

<style scoped>

div::after {
  content: "▼";
  position: relative;
  left: -15px;
  font-size: 0.7rem;
  pointer-events: none;
}

select {
  border: 0;
  border-bottom: 1px solid #AAAAAA;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding-left: 10px !important;
  padding-right: 20%;
  text-indent: 0.01px;
  width: 11rem;
  text-overflow: ellipsis;
}

select:hover {
  cursor: pointer;
}

select:focus {
  outline: 0;
}

option {
  color: black;
}

option:hover {
  font-size: 500px;
}

</style>

<script setup lang="js">
import { defineProps, defineEmits, ref } from 'vue';

const options = ref([
  {'value':'text', 'text':'Texto'}, 
  {'value':'textarea', 'text':'Texto longo'}, 
  {'value':'number', 'text':'Número'}, 
  {'value':'checkbox', 'text':'Caixa de seleção'}, 
  {'value':'radio', 'text':'Escolha única'}, 
  {'value':'dropdown', 'text':'Lista suspensa'}, 
  {'value':'date', 'text':'Data'}
]);

const props = defineProps({
  type: {
    default: 'text',
    type: String
  }
})

const emits = defineEmits({
  changeInput: String
})
</script>