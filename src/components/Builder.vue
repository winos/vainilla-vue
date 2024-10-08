<template>
  <div>
    <h1>Crear Nueva Página</h1>

    <form @submit.prevent="createNewPage">
      <div>
        <label for="pageName">Nombre de la Página:</label>
        <input v-model="pageName" id="pageName" required />
      </div>

      <div>
        <label>Seleccionar Componentes:</label>
        <div v-for="component in availableComponents" :key="component">
          <input
            type="checkbox"
            :value="component"
            v-model="selectedComponents"
          />
          <label>{{ component }}</label>
        </div>
      </div>

      <button type="submit">Crear Página</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      pageName: '',
      availableComponents: ['LoginForm', 'RegisterForm'], // Componentes disponibles
      selectedComponents: [], // Componentes seleccionados
    };
  },
  methods: {
    async createNewPage() {
      try {
        const response = await axios.post('http://localhost:3000/create-page', {
          pageName: this.pageName,
          components: this.selectedComponents,
        });

        console.log(response.data.message);

        // Redirigir a la nueva página si es necesario
        this.$router.push({ path: `/${this.pageName.toLowerCase()}` });
      } catch (error) {
        console.error('Error al crear la página:', error);
      }
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
}

div {
  margin-bottom: 10px;
}

button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}
</style>
