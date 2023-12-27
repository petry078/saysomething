<template>
  <div class="content">
    <Card style="padding: 1.5rem; width: 400px">
      <template #title>
        <div style="margin-bottom: 2rem; font-weight: 600; text-align: center">
          Login To Your Account!
        </div>
      </template>

      <template #content>
        <form method="POST">
          <InputText
            type="text"
            v-model="username"
            name="username"
            placeholder="Username"
            class="form-input"
          />
          <span class="p-input-icon-right form-input">
            <i
              :class="showPassword ? 'pi pi-eye-slash' : 'pi pi-eye'"
              style="cursor: pointer"
              @click="togglePassword"
            ></i>
            <InputText
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              name="password"
              placeholder="Password"
            />
          </span>
          <Button type="button" @click="onSubmit" style="justify-content: center">
            Login
          </Button>
        </form>
        <div style="font-weight: 500; text-align: center; margin: 1.5rem 0">
          Not Registered Yet?
          <router-link to="/register" class="link">Sign-Up</router-link>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'primevue/usetoast'

const showPassword = ref(false)

const username = ref('')
const password = ref('')

const router = useRouter()
const toast = useToast()

const onSubmit = async () => {
  const payload = {
    username: username.value,
    password: password.value,
  }

  try {
    const response = await axios.post('/login', payload)
    localStorage.setItem('token', response.data.token)
    router.push('/')
  } catch (error) {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: error.response.data.message,
      life: 3000,
    })
  }
}

const togglePassword = () => {
  showPassword.value = !showPassword.value
}
</script>

<style>
.content {
  background-color: #eff3f4;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-input {
  width: 100%;
  margin-bottom: 1rem;
}

.form-input input {
  width: 100%;
}
</style>
