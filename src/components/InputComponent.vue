<template>
    <div class="form-card">
      <div class="title">
        <p>X</p>
        <h2>{{ props.inputIndex+1 }}. {{ props.title }}</h2>
        <a v-on:click="emits('changeInput', props.inputIndex, props.pageIndex)">Alterar tipo de questionário</a>
      </div>
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
.form-card {
  display: flex;
  flex-direction: column;
  margin-right: var(--input-spacing) !important;
  margin-bottom: 30px;
}

.input {
  margin-left: var(--input-spacing) !important;
  width: 100%;
}

.title {
  display: flex;
  align-items: baseline;
  gap: 15px;
}

.title h2 {
  font-size: 0.95em !important;
}

.title p {
  user-select: none;
  cursor: pointer;
  font-weight: bolder;
  color: gray;
}

.title p:hover {
  color: red;
}

.title a {
  text-decoration: underline;
  color: #679DFF;
  font-size: 0.7em;
  user-select: none;
}

.title a:hover {
  cursor: pointer;
}
</style>

<script setup lang="js">

import { defineProps, defineEmits } from 'vue';

import TextComponent        from '@/components/inputs/TextComponent.vue';
import TextAreaComponent    from '@/components/inputs/TextAreaComponent.vue';
import NumberComponent      from '@/components/inputs/NumberComponent.vue';
import CheckboxComponent    from '@/components/inputs/CheckboxComponent.vue';
import RadioComponent       from '@/components/inputs/RadioComponent.vue';
import DropdownComponent    from '@/components/inputs/DropdownComponent.vue';
import DateComponent        from '@/components/inputs/DateComponent.vue';
import SelectInputComponent from '@/components/inputs/SelectInputComponent.vue';

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
  inputIndex: {
    default: 1,
    type: Number
  },
  pageIndex: {
    default: 0,
    type: Number
  },
  mode: {
    default: 'read',
    type: String
  }
})

const emits = defineEmits({
  changeInput: Number,
  deleteQuestion: Number
})

function setInputs(){
  const inputs = [];
  inputs['text']        = TextComponent;
  inputs['textarea']    = TextAreaComponent;
  inputs['number']      = NumberComponent;
  inputs['checkbox']    = CheckboxComponent;
  inputs['radio']       = RadioComponent;
  inputs['dropdown']    = DropdownComponent;
  inputs['date']        = DateComponent;

  return inputs;
}

function getInput(input) {
  const inputs = setInputs();

  return inputs[input] ?? SelectInputComponent;
}
</script>