<template>
  <h1>HOME</h1>
  <button @click="onLogout()" class="btn-primary">Logout</button>
</template>

<script>
export default {
  name: 'HomePage',
  created() {
    if (localStorage.getItem('token') == '' || localStorage.getItem('token') == null) {
      this.$router.push('/login')
    }
  },
  methods: {
    onLogout() {
      localStorage.clear()
      this.$router.push('/login')
    },
  },
}
</script>
