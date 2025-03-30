<template>
  <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" role="switch" :id="'switch-required-'+uid">
    <label class="form-check-label" :for="'switch-required-'+uid">Obrigatório</label>
  </div>
</template>

<style scoped>
label {
  user-select: none;
}

.form-check-input {
  border-color: gray;
}

.form-check-input:checked {
  background-color: black;
}

.form-check-label {
  color: gray;
}
</style>

<script setup lang="js">
import { onMounted, getCurrentInstance, ref } from 'vue';

const uid = ref();
onMounted(() => {
  uid.value = getCurrentInstance().uid;
})
</script>