<template>
  <QuestionComponent :jsonForm="json" mode="edit" />
</template>

<style scoped>
</style>

<script setup lang="js">
import { ref } from 'vue';

import QuestionComponent from '@/components/QuestionComponent.vue';

const json = ref('{ "pages": [ { "title": "Questionário por Adote um Gatinho", "inputs": [ { "title": "Já teve algum dos animais abaixo?", "type": "checkbox", "options": ["Cachorro","Gato","Hamster","Papagaio"], "value": ["Gato", "Papagaio"], "required": false }, { "title": "Possui alguma experiência com animais? Nos conte sobre", "type": "textarea", "placeholder": "", "value": "", "required": false },  { "title": "Qual a quantidade de pets que você já teve ao todo?", "type": "number", "placeholder": "", "value": "0", "required": false }, { "title": "Qual o gênero do animal de sua preferência?", "type": "radio", "options": ["Masculino","Feminino"], "value": ["Masculino"], "required": false }, { "title": "Escolha a cidade", "type": "dropdown", "options": ["Birigui","Araçatuba"], "value": "Araçatuba", "required": false }, { "title": "Digite seu nome", "type": "text", "placeholder": "", "value": "Marcos", "required": false }, { "title": "Qual seu aniversário", "type": "date", "placeholder": "", "value": "2025-03-20", "required": false }, { "title": "Selecione o tipo de questionário", "type": "" } ] } ]}');
</script>