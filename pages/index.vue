<script lang="ts" setup>
import { useStore } from '@/store'
const store = useStore()
const items = store.items
</script>

<template>
  <div>
    <div class="grid grid-cols-2 mx-auto max-w-6xl">
      <div class="col-span-1">
        <MainHeader />
      </div>
      <div class="col-span-1">
        <PiniaComponent />
      </div>
    </div>
  </div>
</template>


<style scoped></style>
