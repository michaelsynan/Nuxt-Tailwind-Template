<script lang="ts" setup>
import '@/assets/css/main.css'

</script>

<template>
  <div>
    <navbar />
    <slot />
  </div>
</template>


<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.15s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(.25rem);
}

</style>