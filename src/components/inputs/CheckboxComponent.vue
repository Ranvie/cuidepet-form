<template>
  <div>
    <div class="form-check" v-for="(option, index) in propOptions">
      <span class="delete" v-on:click="remove(index)" v-if="props.mode == 'edit'">X</span>
      <input type="checkbox" class="form-check-input" :id="'checkbox-'+uid+'-'+index" :checked="props.mode != 'edit' && isChecked(option)" :disabled="props.mode != 'answer'">
      <label class="form-check-label" :for="'checkbox-'+uid+'-'+index">{{ props.mode != 'edit' ? option : '' }}</label>
      <input v-if="props.mode === 'edit'" type="text" v-model="propOptions[index]">
    </div>
    <div class="add" v-on:click="add()" v-if="props.mode == 'edit'">
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
import { defineProps, ref, getCurrentInstance, onMounted } from 'vue';

const instance = getCurrentInstance();
const uid = ref(instance.uid);

const propOptions = ref();
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

onMounted(() => {
  propOptions.value = props.options;
})

function isChecked(option) {
  return props.value.includes(option) ? true : false;
}

function add() {
  propOptions.value.push('Nova opção');
}

function remove(index) {
  propOptions.value.splice(index, 1);
}
</script>