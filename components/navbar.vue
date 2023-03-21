<template>
  <header class="fixed top-0 left-0 right-0 p-4 z-50">
    <nav class="container mx-auto flex items-center justify-between">
      <div>
        <nuxt-link to="/" class="text-white text-xl font-bold">Nuxt Tailwind Starter</nuxt-link>
      </div>
      <div class="hidden lg:flex items-center space-x-4">
        <nuxt-link to="/" class="text-white">Home</nuxt-link>
        <nuxt-link to="/docs" class="text-white">Docs</nuxt-link>
        <a href="https://github.com" target="_blank" class="text-white">GitHub</a>
      </div>
      <div class="lg:hidden">
        <button @click="isOpen = !isOpen" class="text-white">
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </nav>
    <div v-if="isOpen" class="bg-blue-400 p-4 lg:hidden">
      <nuxt-link to="/" class="block text-white mb-2">Home</nuxt-link>
      <nuxt-link to="/docs" class="block text-white mb-2">Docs</nuxt-link>
      <a href="https://github.com" target="_blank" class="block text-white">GitHub</a>
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

