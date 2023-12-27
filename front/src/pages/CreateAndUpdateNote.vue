<template>
  <h1>{{ title }} a note</h1>
  <form>
    <Textarea v-model="noted" rows="5" cols="30" />
    <Button type="button" @click="onSubmit">{{ isEdit ? 'Atualizar' : 'Criar' }}</Button>
  </form>
  <div v-if="isEdit">
    <Button type="button" @click="remove">Delete</Button>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useToast } from 'primevue/usetoast'
import { useRouter, useRoute } from 'vue-router'

const noted = ref('')

const toast = useToast()
const router = useRouter()
const route = useRoute()

const isEdit = ref(false)
const id = ref('')

let title = ref('Create')

onMounted(() => {
  if (route.params.id) {
    title.value = 'Update'
    isEdit.value = true
    id.value = route.params.id
    getNoteById(route.params.id)
  }
})

const onSubmit = async () => {
  if (isEdit) {
    update()
  } else {
    create()
  }
}

const getNoteById = async (id) => {
  const response = await axios.get(`/notes/${id}`)
  noted.value = response.data.noted
}

const taosterError = () => {
  toast.add({
    severity: 'error',
    summary: 'Error',
    detail: '',
    life: 3000,
  })
}

const remove = async () => {
  try {
    await axios.delete(`/notes/${id.value}`)

    toast.add({
      severity: 'success',
      summary: 'Successo',
      detail: 'Deletado note com sucesso!',
      life: 3000,
    })

    router.push('/')
  } catch (error) {
    taosterError()
  }
}

const update = async () => {
  try {
    await axios.put(`/notes/${id.value}`, { noted: noted.value })

    toast.add({
      severity: 'success',
      summary: 'Successo',
      detail: 'Atualizado note com sucesso!',
      life: 3000,
    })

    router.push('/')
  } catch (error) {
    taosterError()
  }
}

const create = async () => {
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
    taosterError()
  }
}
</script>
