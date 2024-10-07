<template>
  <div class="layout">
    <header>
      <h1>{{ title }}</h1>
    </header>
    
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>

    <!-- Contenido dinámico -->
    <main>
      <slot></slot>
    </main>

    <footer>
      <p>{{ footerText }}</p>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Theme 2'
    },
    footerText: {
      type: String,
      default: 'Footer 2'
    }
  }
}
</script>

<style scoped>
.layout {
  background-color: yellow; /* Azul claro */
  min-height: 100vh; /* Asegura que cubra toda la altura de la ventana */
  display: flex;
  flex-direction: column; /* Coloca los elementos en columna */
}

header {
  padding: 20px;
  text-align: center;
}

nav {
  padding: 10px;
  text-align: center;
}

main {
  flex: 1; /* Permite que el contenido principal ocupe el espacio restante */
  padding: 20px;
}

footer {
  padding: 10px;
  text-align: center;
}
</style>
