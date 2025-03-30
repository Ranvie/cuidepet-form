<template>
  <form class="form-container">
    <section v-for="(page, pageIndex) in pages" class="page-card">
      <h1>
        <span v-if="props.mode != 'edit'">{{ page.title }}</span>
        <input v-if="props.mode == 'edit'" class="title-input" type="text" :value="page.title">
      </h1>
      <InputComponent v-for="(input, index) in page.inputs" :type="input.type" :title="input.title"
        :options="input.options" :value="input.value" :placeholder="input.placeholder" :required="input.required"
        :inputIndex="index" :pageIndex="pageIndex" :mode="props.mode" @changeInput="changeInput"
        @deleteInput="deleteInput" />
      <div class="add-question" @click="addInput(pageIndex)" v-if="props.mode == 'edit'">
        <div class="plus-box"></div>
        <p>Nova pergunta</p>
      </div>
      <div class="flex-end margin-top">
        <button v-if="props.mode != 'read'">Cancelar</button>
        <button v-if="props.mode != 'read'" type="submit">Enviar</button>
        <button v-if="props.mode == 'read'">Fechar</button>
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
import { defineProps, ref, onMounted } from 'vue';
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
  }
})

onMounted(() => {
  pages.value = JSON.parse(props.jsonForm)?.pages ?? [];
})

function deleteInput(pageIndex, inputIndex) {
  pages.value[pageIndex].inputs.splice(inputIndex, 1);
}

function addInput(pageIndex, input = 'text') {
  pages.value[pageIndex].inputs.push(getNewInputSelector(input));
}

function changeInput(pageIndex, inputIndex, input) {
  pages.value[pageIndex].inputs[inputIndex] = getNewInputSelector(input);
}

function getNewInputSelector(input) {
  return { 
    "title": "Título da pergunta", "type": input, "placeholder": "",
    "value": input == 'radio' || input == 'checkbox' ? [] : '', "required": false
  };
}
</script>