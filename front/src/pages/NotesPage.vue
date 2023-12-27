<template>
  <h1>Notes</h1>

  <div class="list">
    <Note
      v-for="(note, index) in notes"
      :key="note.id"
      :text="note.noted"
      :id="note.id"
    />
  </div>
</template>
<script setup>
import Note from '../components/Note.vue'
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
<style>
.list {
  display: flex;
  gap: 16px;
}
</style>
