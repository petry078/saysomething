<template>
  <span>{{ date }}</span>
</template>
<script setup>
import { ref, onMounted } from 'vue'

const date = ref('')

const props = defineProps({
  date: Date,
})

onMounted(() => {
  formatDate()
})

const formatDate = () => {
  date.value = new Intl.DateTimeFormat('pt-BR').format(props.date)
}
</script>
