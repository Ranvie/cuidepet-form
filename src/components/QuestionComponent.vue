<template>
  <form class="form-container">
    <section v-for="(page, pageIndex) in pages" class="page-card">
      <h1>
        <span v-if="props.mode != 'edit'">{{ page.title }}</span>
        <input v-if="props.mode == 'edit'" class="title-input" type="text" v-model="page.title">
      </h1>
      <InputComponent v-for="(input, index) in page.inputs"
        :id="'question-page'+pageIndex+'-input'+index"
        v-model:title="input.title"
        v-model:options="input.options"
        v-model:value="input.value"
        v-model:placeholder="input.placeholder" 
        v-model:required="input.required"
        v-model:optionsLimit="props.optionsLimit"
        
        :type="input.type"
        :mode="props.mode"
        :inputIndex="index"
        :pageIndex="pageIndex"

        @changeInput="changeInput"
        @deleteInput="deleteInput"
      />
      <div class="add-question" @click="addInput(pageIndex)" v-if="props.mode == 'edit' && addAllowed(pageIndex)">
        <div class="plus-box"></div>
        <p>Nova pergunta</p>
      </div>
      <div class="flex-end margin-top">
        <button v-if="props.mode != 'read'" @click="(e)=>{e.preventDefault();emits('onCancel')}">Cancelar</button>
        <button v-if="props.mode != 'read'" type="submit" @click="submitForm">Enviar</button>
        <button v-if="props.mode == 'read'" @click="(e)=>{e.preventDefault();emits('onCancel')}">Fechar</button>
      </div>
    </section>
  </form>
</template>

<style scoped>
h1 {
  text-align: center;
  margin: 0;
  margin-bottom: 30px;
  font-size: 1.5em;
}

button {
  background-color: transparent;
  padding: 5px 15px;
  margin: 0 10px;
  border-radius: 12px;
  border: 0;
  outline: 1px solid gray;
  box-shadow: 0px 3px 3px gray;
  width: 90px;
  font-size: 0.9em;
  text-align: center;
  text-indent: 0;
  color: gray;
  font-weight: bolder;
}

button:hover {
  cursor: pointer;
  transform: scale(1.1);
}

.form-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.page-card {
  min-width: 500px;
  width: 1000px;
  padding: 30px 40px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 7px;
  box-shadow: 0px 0px 3px gray;
}

.margin-top {
  margin-top: 150px;
}

.add-question {
  display: flex;
  gap: 5px;
  color: green;
  border: 1px solid #D2D2D2;
  width: fit-content;
  border-radius: 0.5em;
  padding: 5px;
}

.add-question:hover {
  cursor: pointer;
}

.plus-box {
  width: 20px;
  height: 20px;
  background-color: green;
  background-repeat: no-repeat;
  background-position: center;
  mask-image: url('../components/icons/plus-box.svg');
  -webkit-mask-image: url('../components/icons/plus-box.svg');
}

.add-question p{
  margin: 0;
}

.title-input {
  border: 0;
  min-width: 95%;
  text-align: center;
}

.title-input:focus {
  outline: 0;
  border-bottom: 1px solid black;
}
</style>

<script setup lang="js">
import { defineProps, ref, onMounted, defineEmits } from 'vue';
import InputComponent from '@/components/InputComponent.vue';

const pages = ref();

const props = defineProps({
  jsonForm: {
    default: '',
    type: String
  },
  mode: { //edit, answer, read
    default: 'read',
    type: String
  },
  questionLimit: {
    default: 10,
    type: Number
  },
  optionsLimit: {
    default: 10,
    type: Number
  }
})

const emits = defineEmits({
  onCancel: null,
  onSubmit: String
})

onMounted(() => {
  pages.value = JSON.parse(props.jsonForm)?.pages ?? [];
})

function deleteInput(pageIndex, inputIndex) {
  pages.value[pageIndex].inputs.splice(inputIndex, 1);
}

function addInput(pageIndex, input = 'text') {
  if(!addAllowed(pageIndex)) return;

  pages.value[pageIndex].inputs.push(getNewInputSelector(input));
}

function changeInput(pageIndex, inputIndex, input) {
  pages.value[pageIndex].inputs[inputIndex] = getNewInputSelector(input);
}

function getNewInputSelector(input) {
  return { 
    "title": "Título da pergunta", "type": input, "placeholder": "", "options": [],
    "value": input == 'radio' || input == 'checkbox' ? [] : '', "required": false
  };
}

function submitForm(e) {
  e.preventDefault();
  
  clearValuesIfEditMode();
  clearAlerts();
  
  const isErrors = hasErrors(validateRequiredAnswers());
  if(isErrors) return;

  emits('onSubmit', JSON.stringify({'pages':pages.value}));
}

function clearValuesIfEditMode() {
  if(props.mode != 'edit') return;

  for(const page of pages.value) {
    for(const input of page.inputs) {
      input.value = clearInputValue(input.type);
    }
  }
}

function clearInputValue(inputType) {
  let cleaned = '';
  
  switch(inputType) {
    case 'checkbox':
    case 'radio':
      cleaned = [];
      break;
  }

  return cleaned;
}

function validateRequiredAnswers() {
  const empty = [];
  if(props.mode == 'edit') return empty;
  
  for(const pageIndex in pages.value) {
    for(const inputIndex in pages.value[pageIndex].inputs) {
      const input = pages.value[pageIndex].inputs[inputIndex];
      if(input.required && (!input.value || input.value.length == 0)){
        empty.push({'page':pageIndex, 'input': inputIndex});
      }
    }
  }

  return empty;
}

function hasErrors(errors = []) {
  if(errors.length == 0) return false;

  const errorInput = document.getElementById(`question-page${errors[0].page}-input${errors[0].input}`);
  errorInput.scrollIntoView({ behavior: "smooth", block: 'center' });
  for(const error of errors) {
    const errorInput = document.getElementById(`question-page${error.page}-input${error.input}`);
    showAlert(errorInput, 'Este campo é obrigatório');
  }

  return true;
}

function clearAlerts() {
  document.querySelectorAll('.alert-box').forEach(el => el.remove());
}

function showAlert(element, mensagem) {
  if (element) {
    var alertDiv = document.createElement("div");
    alertDiv.classList.add('alert-box');
    alertDiv.textContent = mensagem;

    element.appendChild(alertDiv);
  }
}

function addAllowed(pageIndex) {
  return pages.value[pageIndex].inputs.length < props.questionLimit;
}
</script>