<template>
  <div class="template-selector">
    <button @click="selectTemplate('one')">Template 1</button>
    <button @click="selectTemplate('two')">Template 2</button>
  </div>
</template>

<script setup>
const emit = defineEmits(['updateTemplate']); // Definir emits correctamente

const selectTemplate = (template) => {
  emit('updateTemplate', template);
}
</script>

<style scoped>
.template-selector {
  margin: 20px 0;
  text-align: center;
}

button {
  padding: 5px 20px;
  margin: 0 10px;
  font-size: 16px;
}
</style>
