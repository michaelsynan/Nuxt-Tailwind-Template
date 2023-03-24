<script lang="ts" setup>
import { useStore } from '@/store'
const store = useStore()
const items = store.items
</script>

<template>
  <div>
    <div class="text-xs text-stone-500">Pinia Component</div>
    <h2>Starter Includes:</h2>
    <ul>
    <li v-for="(item, index) in items" :key="index" class="text-sm md:text-base">
      {{ item.name }}
    </li>
    </ul>
  </div>
</template>

<style scoped></style>
