import { defineStore } from 'pinia';

export const useStore = defineStore({
  id: 'items',
  state: () => ({
    "items": [
      {
        "name": "item 1",
        "id": "1",
        "description": "Description 1",
      },
      {
        "name": "item 2",
        "id": "2",
        "description": "Description 2",
      },
      {
        "name": "item 3",
        "id": "3",
        "description": "Description 3",
      }, 
    ]
  })
})