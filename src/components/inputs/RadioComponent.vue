<template>
  <div>
    <div class="custom-control custom-radio" v-for="(option, index) in propOptions">
      <span class="delete" v-on:click="remove(index)" v-if="props.mode == 'edit'">X</span>
      <input type="radio" class="custom-control-input" :name="'radio-'+uid" :id="'checkbox-'+uid+'-'+index" :checked="props.mode != 'edit' && isChecked(option)" :disabled="props.mode == 'edit' || props.mode == 'read'">
      <label class="custom-control-label" :for="'checkbox-'+uid+'-'+index">{{ props.mode == 'answer' || props.mode == 'read' ? option : '' }}</label>
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

.custom-radio .custom-control-input:disabled:checked~.custom-control-label::before {
  background-color: #e9ecef;
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
  border: 2px solid gray;
  border-radius: .5rem;
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