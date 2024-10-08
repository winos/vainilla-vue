<template>
  <div>
    <h2>Constructor de Páginas</h2>
    <ComponentSelector @component-added="addComponent" />
    <div class="page">
      <h3>Página de Login</h3>
      <div class="components-container">
        <component
          v-for="(component, index) in components"
          :key="index"
          :is="component"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ComponentSelector from './ComponentSelector.vue';
import LoginForm from './LoginForm.vue';
import SignupForm from './SignupForm.vue';


export default {
  components: {
    ComponentSelector,
    LoginForm,
    SignupForm
  },
  data() {
    return {
      components: [] // Aquí se almacenarán los componentes agregados
    };
  },
  methods: {
    addComponent(componentName) {
        console.log('adding componente', componentName);
        
      this.components.push(componentName);
    }
  }
};
</script>

<style scoped>
.page {
  border: 1px solid #ccc;
  padding: 20px;
  margin-top: 20px;
}
.components-container {
  display: flex;
  flex-direction: column; /* Cambia a 'row' si quieres apilar horizontalmente */
}
</style>
