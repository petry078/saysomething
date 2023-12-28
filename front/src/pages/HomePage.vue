<template>
  <Toolbar class="toolbar-custumized">
    <template #start>
      <div style="cursor: pointer" @click="goToHome">Notes</div>
    </template>
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
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { logout, isLogged } from '../services/authentication/authentication'
import { useRouter } from 'vue-router'

const menu = ref()
const router = useRouter()

onMounted(() => {
  if (!isLogged()) {
    return router.push('/login')
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
  {
    label: 'Create note',
    icon: 'pi pi-note',
    command: () => {
      router.push('/note/create')
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

const goToHome = () => {
  router.push('/')
}
</script>
<style>
.toolbar-custumized {
  background: white;
  border-bottom: 1px solid #e5e7eb;
  padding: 0.5rem 1.25rem;
  border-radius: 0;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.container {
  width: 1024px;
  margin: auto;
}
</style>
