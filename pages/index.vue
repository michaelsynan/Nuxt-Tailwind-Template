<script lang="ts" setup>
import { useStore } from '@/store'
const store = useStore()
const items = store.items
</script>

<template>
  <MainHeader />
  <div>Page: foo</div>
  <div v-for="(item, index) in items" :key="index">
    {{ item.name }}
    </div>
</template>


<style scoped>

</style>
