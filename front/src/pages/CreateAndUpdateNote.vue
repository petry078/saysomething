<template>
  <h1>Create a note</h1>
  <form>
    <Textarea v-model="noted" rows="5" cols="30" />
    <Button type="button" @click="onSubmit">Criar</Button>
  </form>
</template>
<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useToast } from 'primevue/usetoast'
import { useRouter } from 'vue-router'

const noted = ref('')

const toast = useToast()
const router = useRouter()

const onSubmit = async () => {
  try {
    await axios.post('/notes', { noted: noted.value })

    toast.add({
      severity: 'success',
      summary: 'Successo',
      detail: 'Criado note com sucesso!',
      life: 3000,
    })

    router.push('/')
  } catch (error) {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: '',
      life: 3000,
    })
  }
}
</script>
