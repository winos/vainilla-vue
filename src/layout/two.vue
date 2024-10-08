<template>
  <div class="layout">
    <div class="sidebar">
      <img
        src="https://via.placeholder.com/400x600"
        alt="App Background"
        class="app-image"
      />
    </div>
    <div class="content">
      <header>
        <h1>{{ title }}</h1>
        <slot name="header-plugins"></slot>
        <template v-for="hook in getHeaderHooks()" :key="hook.id">
          <component :is="hook.component.component" :params="hook.params" />
        </template>
      </header>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>

      <!-- Contenido dinámico -->
      <main>
        <div class="login-container">
          <form @submit.prevent="handleSubmit">
            <h2>Iniciar Sesión</h2>
            <div class="form-group">
              <label for="email">Correo Electrónico:</label>
              <input type="email" id="email" v-model="email" required />
            </div>
            <div class="form-group">
              <label for="password">Contraseña:</label>
              <input type="password" id="password" v-model="password" required />
            </div>
            <button type="submit" class="btn">Iniciar Sesión</button>
            <p class="link">¿No tienes cuenta? <RouterLink to="/register">Regístrate aquí</RouterLink></p>
          </form>
        </div>
      </main>

      <footer>
        <p>{{ footerText }}</p>
      </footer>
    </div>
  </div>
</template>

<script>
import { useHooks } from '../lib/hooks'; // Importar el sistema de hooks

export default {
  props: {
    title: {
      type: String,
      default: 'Bienvenido'
    },
    footerText: {
      type: String,
      default: 'Footer default'
    }
  },
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    getHeaderHooks() {
      return useHooks.getHeaderHooks();
    },
    handleSubmit() {
      // Manejar el envío del formulario
      console.log('Email:', this.email);
      console.log('Contraseña:', this.password);
      // Aquí puedes agregar lógica para autenticar al usuario
    }
  }
}
</script>

<style scoped>
.layout {
  display: flex; /* Usar flexbox para el layout */
  min-height: 100vh; /* Asegura que cubra toda la altura de la ventana */
}

.sidebar {
  flex: 1; /* Ocupa un tercio de la pantalla */
  background-color: #000; /* Fondo negro */
  display: flex;
  justify-content: center; /* Centra la imagen */
  align-items: center; /* Centra la imagen verticalmente */
}

.app-image {
  width: 100%; /* Ajusta la imagen al tamaño del panel */
  height: auto; /* Mantiene la relación de aspecto */
}

.content {
  flex: 2; /* Ocupa dos tercios de la pantalla */
  background-color: #1a1a1a; /* Fondo gris oscuro */
  color: #fff; /* Color del texto blanco */
  display: flex;
  flex-direction: column; /* Coloca los elementos en columna */
  padding: 20px; /* Espaciado interno */
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
  display: flex;
  justify-content: center; /* Centra el contenido */
  align-items: center; /* Centra verticalmente */
}

.login-container {
  background-color: #2a2a2a; /* Fondo del formulario */
  border-radius: 8px; /* Bordes redondeados */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5); /* Sombra sutil */
  padding: 30px; /* Espaciado interno */
  width: 350px; /* Ancho del formulario */
}

h2 {
  margin-bottom: 20px; /* Espaciado inferior para el título */
  font-weight: 300; /* Peso de la fuente más ligero */
}

.form-group {
  margin-bottom: 15px; /* Espaciado entre los campos */
}

label {
  display: block;
  margin-bottom: 5px; /* Espaciado inferior para la etiqueta */
}

input {
  width: 100%; /* Ancho completo */
  padding: 10px; /* Espaciado interno */
  border: 1px solid #444; /* Borde gris oscuro */
  border-radius: 4px; /* Bordes redondeados */
  background-color: #1c1c1c; /* Fondo del campo de entrada */
  color: #fff; /* Color del texto */
}

input:focus {
  outline: none; /* Sin contorno al hacer foco */
  border-color: #007BFF; /* Cambia el borde a azul al hacer foco */
}

.btn {
  background-color: #007BFF; /* Color del botón */
  color: white; /* Color del texto */
  border: none; /* Sin borde */
  padding: 10px; /* Espaciado interno */
  border-radius: 4px; /* Bordes redondeados */
  cursor: pointer; /* Cursor de mano */
  width: 100%; /* Ancho completo */
  transition: background-color 0.3s; /* Transición suave para el hover */
}

.btn:hover {
  background-color: #0056b3; /* Color del botón al pasar el ratón */
}

.link {
  margin-top: 10px; /* Espaciado superior para el enlace */
  text-align: center; /* Centra el texto */
  color: #ccc; /* Color del texto del enlace */
}

footer {
  padding: 10px;
  text-align: center;
  color: #aaa; /* Color del texto del footer */
}
</style>
