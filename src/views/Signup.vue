
<template>
 <div class="login-container">
          <form @submit.prevent="handleSubmit">
            <h2>Signup</h2>
            <div class="form-group">
              <label for="email">Correo Electrónico:</label>
              <input type="email" id="email" v-model="email" required />
            </div>
            <div class="form-group">
              <label for="password">Contraseña:</label>
              <input type="password" id="password" v-model="password" required />
            </div>
            <button type="submit" class="btn">Register</button>
            <p class="link">¿Ya tienes cuenta? <RouterLink to="/login">Login</RouterLink></p>
          </form>
        </div>
</template>

<script>
export default {
  name: 'Signup',
};
</script>


<style scoped>
.layout {
  background-color: #ADD8E6; /* Azul claro */
  min-height: 100vh; /* Asegura que cubra toda la altura de la ventana */
  display: flex;
  flex-direction: column; /* Coloca los elementos en columna */
  align-items: center; /* Centra horizontalmente */
  justify-content: center; /* Centra verticalmente */
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
  padding: 20px;
}

.login-container {
  background-color: white; /* Fondo blanco para el formulario */
  border-radius: 10px; /* Bordes redondeados */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Sombra */
  padding: 20px;
  width: 300px; /* Ancho del formulario */
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
  border: 1px solid #ccc; /* Borde */
  border-radius: 5px; /* Bordes redondeados */
}

.btn {
  background-color: #007BFF; /* Color del botón */
  color: white; /* Color del texto */
  border: none; /* Sin borde */
  padding: 10px; /* Espaciado interno */
  border-radius: 5px; /* Bordes redondeados */
  cursor: pointer; /* Cursor de mano */
  width: 100%; /* Ancho completo */
}

.btn:hover {
  background-color: #0056b3; /* Color del botón al pasar el ratón */
}

.link {
  margin-top: 10px; /* Espaciado superior para el enlace */
  text-align: center; /* Centra el texto */
}

footer {
  padding: 10px;
  text-align: center;
}
</style>
