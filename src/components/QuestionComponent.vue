<template>
  <form class="form-container">
    <section v-for="page in pages" class="page-card">
      <h1>{{ page.title }}</h1>
      <InputComponent v-for="(input, index) in page.inputs" :type="input.type" :title="input.title" :options="input.options" 
        :value="input.value" :placeholder="input.placeholder" :required="input.required" :index="index+1" :mode="props.mode" />
      <div class="flex-end margin-top">
        <button>Cancelar</button>
        <button type="submit">Enviar</button>
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
</script>