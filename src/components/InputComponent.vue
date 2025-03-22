<template>
    <div class="card">
      <h2>{{ props.index }}. {{ props.title }}</h2>
      <textBoxComponent />
    </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  margin: 10px;
  width: 100%;
}
</style>

<script setup lang="js">
import { defineProps } from 'vue';
import TextBoxComponent from '@/components/inputs/TextBoxComponent.vue';

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
</script>