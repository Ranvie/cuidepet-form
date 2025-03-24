<template>
  <div ref="select" class="custom-select">
    <div ref="selected" class="selected">{{ props.placeholder }}</div>
    <div ref="optionsDiv" class="options">
      <div ref="options" v-for="(option, index) in propOptions" class="option">{{ option }}</div>
      <input ref="newOptionInput" type="text" placeholder="Nova opção..." class="custom-input">
    </div>
  </div>
</template>

<style scoped>
.custom-select {
  position: relative;
  width: 200px;
  height: 40px;
  border: 1px solid gray;
  border-radius: 5px;
  cursor: pointer;
  background: white;
  font-size: 0.8em;
  user-select: none;
}

.custom-select::after {
  content: "▼";
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 14px;
  color: #666;
}

.selected {
  padding: 10px;
  background: transparent;
}

.options {
  display: none;
  position: absolute;
  width: 100%;
  top: 40px;
  border: 1px solid #ccc;
  background: white;
  max-height: 150px;
  overflow-y: auto;
}

.option, .custom-input {
  padding: 10px;
  display: block;
  width: calc(100% - 20px);
}

.option:hover {
  background: #f0f0f0;
}

.custom-input {
  border: none;
  outline: none;
}
</style>

<script setup lang="js">
import { defineProps, onMounted, ref, watch } from 'vue';

const select         = ref();
const selected       = ref();
const optionsDiv     = ref();
const options        = ref([]);
const newOptionInput = ref();

const propOptions = ref();
const props = defineProps({
  placeholder: {
    default: '',
    type: String
  },
  value: {
    default: '',
    type: String
  },
  options: {
    default: [],
    type: Array
  },
  mode: {
    default: 'read',
    type: String
  },
  required: {
    default: false,
    type: Boolean
  }
});

onMounted(() => {
  propOptions.value = props.options;

  setOnSelectClick();
  setOnNewOptionInput();
  setOnOptionClick();
})

watch(propOptions, (newVal, oldVal) => {
  setTimeout(() => {
    setInputOptionListeners();
  }, 1)
}, { deep: true });

function setOnSelectClick() {
  select.value.addEventListener("click", () => {
    optionsDiv.value.style.display = optionsDiv.value.style.display === "block" ? "none" : "block";
  });
}

function setOnNewOptionInput() {
  newOptionInput.value.addEventListener("click", (e) => e.stopPropagation());
  newOptionInput.value.addEventListener("focusout", () => {
    const value = newOptionInput.value.value;
    if(value == '') return;
    
    propOptions.value.push(value);
    newOptionInput.value.value = '';
    optionsDiv.value.style.display = 'block';
  });
}

function setOnOptionClick() {
  setTimeout(() => {
    setInputOptionListeners();
  }, 1)
}

function setInputOptionListeners() {
  for(const option of options.value){
    option.removeEventListener("click", () => {
      selected.value.textContent = option.textContent;
    });

    option.addEventListener("click", () => {
      selected.value.textContent = option.textContent;
    });
  }
}

</script>