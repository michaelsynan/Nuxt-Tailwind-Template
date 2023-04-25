import { defineStore } from 'pinia';

export const useStore = defineStore({
  id: 'items',
  state: () => ({
    "items": [
      {
        "name": "Nuxt 3",
        "id": "1",
        "description": "Description 1",
      },
      {
        "name": "TailwindCSS",
        "id": "2",
        "description": "Description 2",
      },
      {
        "name": "Pinia",
        "id": "3",
        "description": "Description 3",
      }, 
      {
        "name": "Unplugin-Icons",
        "id": "3",
        "description": "Description 3",
      }, 
      {
        "name": "Base Layer via Extends (coming soon)",
        "id": "4",
        "description": "Description 4",
      }
    ]
  })
})