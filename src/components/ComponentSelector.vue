<template>
  <div>
    <h3>Agregar Componente</h3>
    <select v-model="selectedComponent">
      <option v-for="component in components" :key="component.name" :value="component.name">
        {{ component.label }}
      </option>
    </select>
    <button @click="addComponent">Agregar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedComponent: '',
      components: [
        { name: 'LoginForm', label: 'Formulario de Login' },
        { name: 'SignupForm', label: 'Formulario de registro'}
        // Aquí puedes agregar más componentes según sea necesario
      ]
    };
  },
  methods: {
    addComponent() {
      this.$emit('component-added', this.selectedComponent);
      this.selectedComponent = ''; // Reinicia la selección
    }
  }
};
</script>

<style scoped>
/* Estilos para el selector de componentes */
</style>
