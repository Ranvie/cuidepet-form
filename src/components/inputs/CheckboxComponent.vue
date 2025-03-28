<template>
  <div>
    <div class="custom-control custom-checkbox" v-for="(option, index) in propOptions">
      <span class="delete" v-on:click="remove(index)">X</span>
      <input type="checkbox" class="custom-control-input" :id="'checkbox-'+uid+'-'+index" :checked="isChecked(option)">
      <label class="custom-control-label" :for="'checkbox-'+uid+'-'+index">{{ option }}</label>
    </div>
    <div class="add" v-on:click="add()">
      <div class="add-plus"></div>
      <div class="add-label">Adicionar</div>
    </div>
  </div>
</template>

<style scoped>
.custom-container {
  display: flex;
  flex-direction: column;
}

.custom-control-label::before {
  background-color: transparent;
  border: 2px solid gray;
}

.custom-control-input:checked~.custom-control-label::before {
  background-color: transparent;
}

.custom-checkbox .custom-control-input:checked~.custom-control-label::after {
  background-image: url('../icons/checkbox-checked.svg');
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
  gap: 17px;
}

.add-plus {
  background-image: url('../icons/plus.svg');
  background-repeat: no-repeat;
  background-position: center;
  height: 1rem;
  width: 1rem;
  border: 2px solid gray;
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