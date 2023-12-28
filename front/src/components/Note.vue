<template>
  <div class="note">
    <div class="note-content">
      <p>{{ text }}</p>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div><DateFormat :date="createdAt" /></div>
        <Button  icon="pi" severity="secondary" aria-label="Bookmark" @click="goToEdit" rounded>
          &#128684
        </Button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import DateFormat from './DateFormat.vue'

const router = useRouter()

const props = defineProps({
  text: String,
  id: Number,
  createdAt: Date
})

const goToEdit = () => {
    router.push(`/note/update/${props.id}`)
}
</script>
<style>
.note {
  padding: 16px;
  background-color: #ffc972;
  border-radius: 8px;
  width: 200px;
  min-height: 180px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}

.note-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
</style>
