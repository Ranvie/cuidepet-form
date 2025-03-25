<template>
  <div>
    <div class="select-input">
      <div class="select-input-div">
        <input v-model="searchValue" type="text" :onkeyup="updateFilter()" placeholder="Procurar...">
      </div>
      <ul>
        <li v-for="option in propOptions">{{ option }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.select-input {
  border: 1px solid gray;
  border-radius: 1em;
  width: 30% !important;
  margin: 10px auto;
}

.select-input input {
  width: calc(100% - 40px);
  margin: 20px 20px 10px 20px;
  border: 0;
  border-bottom: 1px solid gray;
  padding-right: 25px;
}

.select-input input:focus {
  outline: 0;
}

.select-input ul {
  height: 200px;
  overflow: auto;
  list-style: none;
  padding: 0 20px;
}

.select-input ul li {
  padding-bottom: 10px;
}

.select-input ul li:hover {
  cursor: pointer;
  list-style-type: disc;
  margin-left: 10px;
}
</style>

<script setup lang="js">
import { defineProps, onMounted, ref } from 'vue';

const searchValue = ref();
const propOptions = ref();
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

onMounted(() => {
  propOptions.value = props.options;
})

function updateFilter() {
  if(!searchValue.value) { propOptions.value = props.options; return; };

  propOptions.value = props.options.filter(item => normalize(item).includes(normalize(searchValue.value)));
}

function normalize(text) {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

</script>