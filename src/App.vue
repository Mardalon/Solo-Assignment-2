<script setup lang="ts">
import { ref } from 'vue'
import { useNotes } from './composables/useNotes'
import NoteCard from './components/NoteCard.vue'
import NoteForm from './components/NoteForm.vue'
import SearchBar from './components/SearchBar.vue'

const { addNote, deleteNote, filteredNotes } = useNotes()

const searchTerm = ref('')
const visibleNotes = filteredNotes(searchTerm)
</script>

<template>
  <main class="container">
    <h1>QuickNotes</h1>
    <SearchBar v-model="searchTerm" />
    <NoteForm @add="addNote" />

    <section class="notes-list">
      <p v-if="visibleNotes.length === 0" class="empty-state">
        Keine passenden Notizen gefunden.
      </p>
      <NoteCard
        v-for="note in visibleNotes"
        :key="note.id"
        :note="note"
        @delete="deleteNote"
      />
    </section>
  </main>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 0 1rem;
  font-family: sans-serif;
}
.empty-state {
  color: #64748b;
  text-align: center;
}
</style>