<template>
  <Toolbar>
    <template #end>
      <Button
        icon="pi pi-user"
        text
        rounded
        @click="toggle"
        aria-haspopup="true"
        aria-controls="overlay-menu"
      />
      <Menu ref="menu" id="overlay-menu" :model="items" :popup="true" />
    </template>
  </Toolbar>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { logout, isLogged } from '../services/authentication/authentication'
import { useRouter } from 'vue-router'

const menu = ref()
const router = useRouter()

onMounted(() => {
  if (!isLogged()) {
    router.push('/login')
  }
})

const items = ref([
  {
    label: 'Logout',
    icon: 'pi pi-sign-out',
    command: () => {
      onLogout()
    },
  },
])

const toggle = (event) => {
  menu.value.toggle(event)
}

const onLogout = () => {
  logout()
  router.push('/login')
}
</script>
