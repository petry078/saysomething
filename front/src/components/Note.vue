<template>
  <div class="note">
    <div class="note-content">
      <p>{{ text }}</p>
      <Button icon="pi" severity="secondary" aria-label="Bookmark" @click="goToEdit">
        &#128684
      </Button>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  text: String,
  id: Number
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
