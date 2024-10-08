<template>
  <div>
      <h1>Plugin 2</h1>
    <p>{{ params.message }}</p> <!-- Muestra el mensaje pasado como parámetro -->
  </div>
</template>

<script>
export default {
  props: {
    params: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style scoped>
/* Estilos para el plugin uno */
</style>
