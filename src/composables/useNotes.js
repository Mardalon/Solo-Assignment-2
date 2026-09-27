import { computed } from 'vue'
import { useLocalStorage } from './useLocalStorage.js'

export function useNotes() {
  const notes = useLocalStorage('quicknotes', [])

  function addNote(noteData) {
    const newNote = {
      id: Date.now(),
      title: noteData.title.trim(),
      content: noteData.content.trim(),
      tags: noteData.tags || []
    }
    notes.value.unshift(newNote)
  }

  function deleteNote(id) {
    notes.value = notes.value.filter((note) => note.id !== id)
  }

  function filteredNotes(term) {
    return computed(() => {
      const query = (typeof term === 'object' && term !== null ? term.value : term || '')
        .toLowerCase()
        .trim()

      if (!query) {
        return notes.value
      }

      return notes.value.filter((n) => {
        const matchTitle = n.title.toLowerCase().includes(query)
        const matchContent = n.content.toLowerCase().includes(query)
        const matchTag = n.tags && n.tags.some((tag) => tag.toLowerCase().includes(query))
        return matchTitle || matchContent || matchTag
      })
    })
  }

  return { notes, addNote, deleteNote, filteredNotes }
}