<script lang="ts" setup>
import { useStore } from '@/store'
const store = useStore()
const items = store.items
</script>

<template>
  <div>
    <h2>Pinia Component</h2>
    <div>Store Items:</div>
    <ul>
    <li v-for="(item, index) in items" :key="index">
      {{ item.name }}
    </li>
    </ul>
  </div>
</template>

<style scoped></style>
