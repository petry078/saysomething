<template>
  <h1>Notes</h1>
  <ul>
    <li v-for="(note, index) in notes" :key="note.id">{{ note.noted }}</li>
  </ul>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

const notes = ref([])

onMounted(() => {
  getNotes()
})

const getNotes = async () => {
  try {
    const response = await axios.get('/notes')
    notes.value = response.data
  } catch (error) {}
}
</script>
