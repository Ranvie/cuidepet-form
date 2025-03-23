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
        class="input"
      ></component>
    </div>
</template>

<style scoped>


.card {
  display: flex;
  flex-direction: column;
  margin-right: var(--input-spacing) !important;
  margin-bottom: 30px;
}

h2 {
  font-size: 0.95em;
}

.input {
  margin-left: var(--input-spacing) !important;
  width: 100%;
}
</style>

<script setup lang="js">

import { defineProps } from 'vue';

import TextComponent     from '@/components/inputs/TextComponent.vue';
import TextAreaComponent from '@/components/inputs/TextAreaComponent.vue';
import NumberComponent   from '@/components/inputs/NumberComponent.vue';
import CheckboxComponent from '@/components/inputs/CheckboxComponent.vue';
import RadioComponent    from '@/components/inputs/RadioComponent.vue';
import DropdownComponent from '@/components/inputs/DropdownComponent.vue';

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

function setInputs(){
  const inputs = [];
  inputs['text']        = TextComponent;
  inputs['textarea']    = TextAreaComponent;
  inputs['number']      = NumberComponent;
  inputs['checkbox']    = CheckboxComponent;
  inputs['radio']       = RadioComponent;
  inputs['dropdown']    = DropdownComponent;
  inputs['date']        = TextComponent;
  inputs['selectInput'] = TextComponent;

  return inputs;
}

function getInput(input) {
  const inputs = setInputs();

  return inputs[input];
}
</script>