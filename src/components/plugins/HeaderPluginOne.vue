<template>
  <div>
    <p>{{ params.message }}</p>
     <!-- Muestra el mensaje pasado como parámetro -->
  </div>
</template>

<script>

alert('hey')
export default {
  props: {
    params: {
      type: Object,
      default: () => ({
          message: String
      })
    }
  }
}
</script>

<style scoped>
/* Estilos para el plugin uno */
</style>
