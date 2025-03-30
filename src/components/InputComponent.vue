<template>
    <div class="form-card">
      <div class="title">
        <div class="trash-bin" @click="emits('deleteInput', props.pageIndex, props.inputIndex)" v-if="props.mode == 'edit'"></div>
        <h2>
          {{ props.inputIndex+1 }}. <span v-if="props.mode != 'edit'">{{ props.title }}</span> 
          <input v-if="props.mode == 'edit'" class="title-input" type="text" v-model="props.title">
        </h2>
      </div>
      <component
        :is="getInput(props.type)"
        :placeholder="props.placeholder"
        :value="props.value"
        :mode="props.mode"
        :required="props.required"
        :options="props.options"
        class="input"
      />
      <div class="other-controls" v-if="props.mode == 'edit'">
        <SelectInputComponent :type="props.type" @changeInput="(input) => emits('changeInput', props.pageIndex, props.inputIndex, input)"/>
        <SwitchComponent />
      </div>
    </div>
</template>

<style scoped>
.title-input {
  border: 0;
  min-width: 95%;
}

.title-input:focus {
  outline: 0;
  border-bottom: 1px solid black;
}

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
  gap: 10px;
}

.title h2 {
  font-size: 0.95em !important;
  width: 100%;
}

.title p {
  user-select: none;
  cursor: pointer;
  font-weight: bolder;
  color: gray;
}

.trash-bin {
  width: 15px;
  height: 16px;
  background-color: #7A7A7A;
  background-repeat: no-repeat;
  background-position: center;
  mask-image: url('../components/icons/trash-bin.svg');
  -webkit-mask-image: url('../components/icons/trash-bin.svg');
}

.trash-bin:hover {
  cursor: pointer;
  background-color: red;
}

.other-controls {
  display: flex;
  justify-content: end;
  margin-top: 20px;
  gap: 40px;
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
import SwitchComponent      from '@/components/inputs/SwitchComponent.vue';

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
    default: 0,
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
  changeInput: String,
  deleteInput: Number
})

function setInputs(){
  const inputs       = [];
  inputs['text']     = TextComponent;
  inputs['textarea'] = TextAreaComponent;
  inputs['number']   = NumberComponent;
  inputs['checkbox'] = CheckboxComponent;
  inputs['radio']    = RadioComponent;
  inputs['dropdown'] = DropdownComponent;
  inputs['date']     = DateComponent;

  return inputs;
}

function getInput(input) {
  const inputs = setInputs();

  return inputs[input.toLowerCase()] ?? TextComponent;
}
</script>