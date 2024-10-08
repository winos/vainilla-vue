<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">Username:</label>
      <input type="text" v-model="username" id="username" required />
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" v-model="password" id="password" required />
    </div>
    <button type="submit">Login</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    submitForm() {
      console.log('Logging in with:', this.username, this.password);
      // Aquí puedes agregar lógica para conectar a tu API personalizada
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  max-width: 300px;
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
