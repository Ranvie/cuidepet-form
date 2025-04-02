<template>
  <div>
    <div class="form-check" v-for="(option, index) in propOptions">
      <span class="delete" v-on:click="remove(index)" v-if="propMode == 'edit'">X</span>
      <input 
        type="checkbox" class="form-check-input" :id="'checkbox-'+uid+'-'+index" :checked="propMode != 'edit' && isChecked(option)" 
        :disabled="propMode != 'answer'" @click="selectionChanged(option)"
      >
      <label class="form-check-label" :for="'checkbox-'+uid+'-'+index">{{ propMode != 'edit' ? option : '' }}</label>
      <input v-if="propMode === 'edit'" type="text" v-model="propOptions[index]">
    </div>
    <div class="add" v-on:click="add()" v-if="propMode == 'edit' && addAllowed()">
      <div class="add-plus"></div>
      <div class="add-label">Adicionar</div>
    </div>
  </div>
</template>

<style scoped>
input[type="text"] {
  position: relative;
  border: none;
  background-color: transparent;
  width: fit-content;
  left: -11px;
}

input[type="text"]:focus {
  outline: 0;
  border-bottom: 1px solid black;
}

.custom-container {
  display: flex;
  flex-direction: column;
}

.form-check-input {
  border: 1px solid gray;
}

.form-check-input:checked {
  background-color: transparent;
}

.form-check-input:checked {
  background-image: url('../icons/checkbox-checked.svg');
  background-size: 0.6rem;
}

.custom-checkbox .custom-control-input:disabled:checked~.custom-control-label::before {
  background-color: #e9ecef;
}


.delete {
  position: relative;
  right: 45px;
}

.delete:hover {
  color: red;
  cursor: pointer;
}

.add {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  width: fit-content;
}

.add-plus {
  background-image: url('../icons/plus.svg');
  background-repeat: no-repeat;
  background-position: center;
  height: 1rem;
  width: 1rem;
  border: 1px solid gray;
  border-radius: .25rem;
}

.add-label {
  color: gray;
}
</style>

<script setup lang="js">
import { ref, getCurrentInstance } from 'vue';

const instance = getCurrentInstance();
const uid = ref(instance.uid);

const propPlaceholder  = defineModel('placeholder', { default: '', type: String });
const propValue        = defineModel('value', { default: [], type: Array });
const propOptions      = defineModel('options', { default: ['Nova opção'], type: Array });
const propMode         = defineModel('mode', { default: 'read', type: String });
const propRequired     = defineModel('required', { default: false, type: Boolean });
const propOptionsLimit = defineModel('optionsLimit', { default: 10, type: Number });

function isChecked(option) {
  return propValue.value.includes(option) ? true : false;
}

function add() {
  if(!addAllowed()) return;

  propOptions.value.push('Nova opção');
}

function remove(index) {
  propOptions.value.splice(index, 1);
}

function selectionChanged(option) {
  const index = propValue.value.indexOf(option);
  
  if (index === -1) {
    propValue.value.push(option);
  } else {
    propValue.value.splice(index, 1);
  }
}

function addAllowed() {
  return propOptions.value.length < propOptionsLimit.value;
}
</script>