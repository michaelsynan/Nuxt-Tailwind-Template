<template>
  <header class="fixed top-0 left-0 right-0 p-4 z-50">
    <nav class="container mx-auto flex items-center justify-between">
      <div>
        <nuxt-link to="`${$router.options.base}`" class="text-white text-xl font-bold">Nuxt Tailwind Starter</nuxt-link>
      </div>
      <div class="hidden lg:flex items-center space-x-4">
        <nuxt-link to="/" class="text-white">Home</nuxt-link>
        <nuxt-link to="`/docs`" class="text-white">Docs</nuxt-link>
        <a href="https://github.com/michaelsynan/Nuxt-Tailwind-Template" target="_blank" class="text-white">GitHub</a>
      </div>
      <div class="lg:hidden">
        <button @click="isOpen = !isOpen" class="text-white">
          <i v-if="!isOpen" class="fas fa-bars"></i>
          <i v-else class="fas fa-times"></i>
        </button>
      </div>
    </nav>
    <div v-if="isOpen" class="bg-blue-400 p-4 lg:hidden">
      <div class="flex flex-col items-center space-y-4">
        <nuxt-link to="/" class="text-white">Home</nuxt-link>
        <nuxt-link to="`/docs" class="text-white">Docs</nuxt-link>
        <a href="https://github.com/michaelsynan/Nuxt-Tailwind-Template" target="_blank" class="text-white">GitHub</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style scoped>
body {
  padding-top: 4rem;
}
</style>

