<script setup lang="ts">
import BaseCard from './BaseCard.vue'
import type { Note } from '../types/note'

const props = defineProps<{
  note: Note
}>()

const emit = defineEmits<{
  (e: 'delete', id: number): void
}>()
</script>

<template>
  <BaseCard>
    <!-- Benannter Header-Slot -->
    <template #header>
      <div class="header-content">
        <h3>{{ props.note.title }}</h3>
        <button class="delete-btn" @click="emit('delete', props.note.id)">Löschen</button>
      </div>
    </template>

    <!-- Default-Slot -->
    <p class="note-text">{{ props.note.content }}</p>
    <div v-if="props.note.tags && props.note.tags.length" class="tags">
      <span v-for="tag in props.note.tags" :key="tag" class="tag-badge">
        #{{ tag }}
      </span>
    </div>
  </BaseCard>
</template>

<style scoped>
.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-content h3 {
  margin: 0;
  font-size: 1.1rem;
}
.delete-btn {
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
}
.note-text {
  margin-top: 0;
  white-space: pre-wrap;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}
.tag-badge {
  background: #e2e8f0;
  font-size: 0.8rem;
  padding: 2px 6px;
  border-radius: 4px;
}
</style>