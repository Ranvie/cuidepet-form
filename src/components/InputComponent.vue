<template>
    <div class="card">
      <h2>{{ props.index }}. {{ props.title }}</h2>
      <component 
        :is="getInput(props.type)" 
        :placeholder="props.placeholder"
        :value="props.value"
        :mode="props.mode"
        :required="props.required"
        :options="props.options"
      ></component>
    </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
}

h2 {
  font-size: 0.95em;
}

input {
  margin-left: 22px;
}
</style>

<script setup lang="js">

import { defineProps, ref, onMounted } from 'vue';

import TextComponent     from '@/components/inputs/TextComponent.vue';
import TextAreaComponent from '@/components/inputs/TextAreaComponent.vue';

const inputProps = ref();
const props = defineProps({
  type: {
    default: 'text',
    type: String
  },
  title: {
    default: 'Título da pergunta',
    type: String
  },
  options: {
    default: [],
    type: Array
  },
  value: {
    default: '',
  },
  placeholder: {
    default: ''
  },
  required: {
    default: false,
    type: Boolean
  },
  index: {
    default: 1,
    type: Number
  },
  mode: {
    default: 'read',
    type: String
  }
})

onMounted(() => {
  inputProps.value = filterKeys(props.value, ["options", "value", "placeholder", "required", "mode"]);
})

function setInputs(){
  const inputs = [];
  inputs['text']        = TextComponent;
  inputs['textarea']    = TextAreaComponent;
  inputs['number']      = TextComponent;
  inputs['checkbox']    = TextComponent;
  inputs['radio']       = TextComponent;
  inputs['dropdown']    = TextComponent;
  inputs['date']        = TextComponent;
  inputs['selectInput'] = TextComponent;

  return inputs;
}

function getInput(input) {
  const inputs = setInputs();

  return inputs[input];
}

function filterKeys(object, keys = []) {
  return Object.entries(object).filter(key => !keys.includes(key));
}
</script>