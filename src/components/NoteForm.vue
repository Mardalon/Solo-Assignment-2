<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  (e: 'add', note: { title: string; content: string; tags: string[] }): void
}>()

const title = ref('')
const content = ref('')
const tagInput = ref('')

function handleSubmit() {
  if (!title.value.trim() || !content.value.trim()) return

  const tags = tagInput.value
    .split(',')
    .map((t) => t.trim())
    .filter((t) => t.length > 0)

  emit('add', {
    title: title.value,
    content: content.value,
    tags
  })

  title.value = ''
  content.value = ''
  tagInput.value = ''
}
</script>

<template>
  <form class="note-form" @submit.prevent="handleSubmit">
    <h3>Neue Notiz erstellen</h3>
    <input v-model="title" placeholder="Titel" required />
    <textarea v-model="content" placeholder="Inhalt der Notiz..." rows="3" required></textarea>
    <input v-model="tagInput" placeholder="Tags (kommagetrennt, z.B. uni, vue, todo)" />
    <button type="submit">Notiz speichern</button>
  </form>
</template>

<style scoped>
.note-form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: #f1f5f9;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}
.note-form input,
.note-form textarea {
  padding: 0.5rem;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
}
.note-form button {
  background-color: #2563eb;
  color: white;
  border: none;
  padding: 0.6rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
</style>