<template>
  <div class="content">
    <div class="card">
      <h1 style="margin-bottom: 2rem; font-weight: 600">Login To Your Account!</h1>

      <form method="POST" class="form-group">
        <input
          class="form-input"
          type="text"
          v-model="username"
          name="username"
          placeholder="Username"
        />
        <input
          class="form-input"
          type="password"
          v-model="password"
          name="password"
          placeholder="Password"
        />
        <button type="button" @click="onSubmit()" class="btn-primary">Login</button>
      </form>
      <div style="font-weight: 500; text-align: center; margin: 1.5rem 0">
        Not Registered Yet? <router-link to="/register" class="link">Sign-Up</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    onSubmit() {
      const payload = {
        username: this.username,
        password: this.password,
      }

      axios
        .post('/login', payload)
        .then((response) => {
          const { token } = response.data
          localStorage.setItem('token', token)
          this.$router.push('/')
        })
        .catch((error) => {
          console.error(error)
        })
    },
  },
}
</script>
