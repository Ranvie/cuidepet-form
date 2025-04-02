<template>
  <div ref="select" class="select-custom" :class="propMode == 'read' ? 'disabled' : ''">
    <div ref="selected" class="selected"></div>
    <div ref="optionsDiv" class="options">
      <div ref="options" v-for="(option, index) in propOptions" class="option">
        <span @click="(e) => { e.stopPropagation();remove(index) }" class="delete" v-if="propMode == 'edit'">X</span>
        <span>{{ option }}</span>
      </div>
      <input ref="newOptionInput" type="text" placeholder="Nova opção..." class="custom-input" 
        @click="(e) => { e.stopPropagation(); setOnNewOptionInput() }" v-if="propMode == 'edit' && addAllowed()"
      >
    </div>
  </div>
</template>

<style scoped>
.select-custom {
  position: relative;
  width: 200px;
  height: 40px;
  border: 1px solid gray;
  border-radius: 5px;
  cursor: pointer;
  background: white;
  font-size: 0.8em;
  user-select: none;
  z-index: 100;
}

.select-custom::after {
  content: "▼";
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 14px;
  color: #666;
}

.disabled {
  background-color: #fafafa;
  cursor: auto;
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

.delete {
  position: relative;
  margin-right: 10px;
}

.delete:hover {
  color: red;
  cursor: pointer;
}
</style>

<script setup lang="js">
import { defineModel, onMounted, ref, watch } from 'vue';

const select         = ref();
const selected       = ref();
const optionsDiv     = ref();
const options        = ref([]);
const newOptionInput = ref();

const propPlaceholder  = defineModel('placeholder', { default: '', type: String });
const propValue        = defineModel('value', { default: '', type: String });
const propOptions      = defineModel('options', { default: [], type: Array });
const propMode         = defineModel('mode', { default: 'read', type: String });
const propRequired     = defineModel('required', { default: false, type: Boolean });
const propOptionsLimit = defineModel('optionsLimit', { default: 10, type: Number });

onMounted(() => {
  switch(propMode.value) {
    case 'answer':
      setOnSelectClick();
      setOnOptionClick();
      break;

    case 'edit':
      setOnSelectClick();
      setOnNewOptionInput();
      break;
  }

  getInitialValue();
})

watch(propOptions, (newVal, oldVal) => {
  if(propMode != 'answer') return;

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
    if(value == '' || !addAllowed()) return;
    
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
      propValue.value = option.textContent;
    });
  }
}

function getInitialValue() {
  setTimeout(() => {
    if (propOptions.value.includes(propValue.value)) { selected.value.textContent = propValue.value; return; }
  
    selected.value.textContent = propPlaceholder.value;
  }, 1)
}

function remove(index) {
  propOptions.value.splice(index, 1);
}

function addAllowed() {
  return propOptions.value.length < propOptionsLimit.value;
}

</script>