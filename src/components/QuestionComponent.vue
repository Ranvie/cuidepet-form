<template>
  <form class="form-container">
    <section v-for="page in pages" class="page-card">
      <h1>{{ page.title }}</h1>
      <InputComponent v-for="(input, index) in page.inputs" :type="input.type" :title="input.title" :options="input.options" 
        :value="input.value" :placeholder="input.placeholder" :required="input.required" :index="index+1" :mode="props.mode" />
    </section>
    <button>Cancelar</button>
    <button type="submit">Enviar</button>
  </form>
</template>

<style scoped>
  .form-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .page-card {
    display: flex;
    flex-direction: column;
    padding: 30px;
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