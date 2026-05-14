<template>
  <QuestionComponent
    :jsonForm="json" 
    mode="edit"
    @onCancel="console.log('Cancelou')"
    @onSubmit="(data) => console.log(data)"
    @onReport="console.log('Denunciou')"
  />
</template>

<style scoped>
</style>

<script setup lang="js">
import { ref } from 'vue';

import QuestionComponent from '@/components/QuestionComponent.vue';

const json = ref('{"pages":[{"title":"Questionário por Adote um Gatinho","inputs":[{"title":"Já teve algum dos animais abaixo?","type":"checkbox","options":["Cachorro","Gato","Hamster","Papagaio"],"value":[],"required":true},{"title":"Possui alguma experiência com animais? Nos conte sobre","type":"textarea","placeholder":"","value":"","required":true},{"title":"Qual a quantidade de pets que você já teve ao todo?","type":"number","placeholder":"","value":"","required":true},{"title":"Qual o gênero do animal de sua preferência?","type":"radio","options":["Masculino","Feminino"],"value":[],"required":true},{"title":"Escolha a cidade","type":"dropdown","options":["Birigui","Araçatuba"],"value":"","required":true},{"title":"Digite seu nome","type":"text","placeholder":"","value":"","required":true},{"title":"Qual seu aniversário","type":"date","placeholder":"","value":"","required":true}]}]}');
</script>