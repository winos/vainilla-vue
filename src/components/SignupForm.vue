<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">Username:</label>
      <input type="text" v-model="username" id="username" required />
    </div>
    
    <div>
      <label for="email">Email:</label>
      <input type="email" v-model="email" id="email" required />
    </div>

    <div>
      <label for="password">Password:</label>
      <input type="password" v-model="password" id="password" required />
    </div>

    <div>
      <label for="confirmPassword">Confirm Password:</label>
      <input type="password" v-model="confirmPassword" id="confirmPassword" required />
    </div>

    <button type="submit">Register</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    submitForm() {
      if (this.password !== this.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }

      // Aquí puedes agregar la lógica para conectar a tu API personalizada
      console.log('Registering with:', {
        username: this.username,
        email: this.email,
        password: this.password
      });
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

button:hover {
  background-color: #45a049;
}
</style>
