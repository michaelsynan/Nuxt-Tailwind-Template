<template>
  <div>
    <navbar />
    <NuxtPage />
  </div>
</template>


<script>
import '@/assets/css/main.css'

</script>

<style>

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