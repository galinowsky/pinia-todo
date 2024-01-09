import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTaskStore = defineStore('taskStore', () => {
  const tasks = ref([
    { id: 1, title: 'Learn Vue.js', completed: true, isFavorite: false },
    { id: 2, title: 'Learn React.js', completed: false, isFavorite: true },
    { id: 3, title: 'Learn Angular.js', completed: false, isFavorite: false }
  ])
  const name = ref('Kuba')

  return { tasks, name }
})
