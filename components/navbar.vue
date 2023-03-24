<template>
  <header class="fixed top-0 left-0 right-0 p-4 z-50">
    <nav class="container mx-auto flex items-center justify-between">
      <div>
        <nuxt-link to="/" class="text-white text-xl font-bold border-none">Nuxt Tailwind Starter</nuxt-link>
      </div>
      <div class="hidden lg:flex items-center space-x-4">
        <nuxt-link to="/" class="text-white border-none">Home</nuxt-link>
        <nuxt-link to="/docs" class="text-white border-none">Docs</nuxt-link>
        <a href="https://github.com/michaelsynan/Nuxt-Tailwind-Template" target="_blank" class="text-white border-none">GitHub</a>
      </div>
      <div class="lg:hidden">
        <button @click="isOpen = !isOpen" class="text-white">
          <svg v-show="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-show="isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </nav>
    <div id="nav-menu" v-if="isOpen" class="bg-stone-900 p-4 lg:hidden" :class="{ open: isOpen }">
      <div class="flex flex-col items-start space-y-4">
        <nuxt-link to="/" class="text-white border-none">Home</nuxt-link>
        <nuxt-link to="/docs" class="text-white border-none">Docs</nuxt-link>
        <a href="https://github.com/michaelsynan/Nuxt-Tailwind-Template" target="_blank" class="text-white border-none">GitHub</a>
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

/* Add the following CSS */
.bg-stone-900 {
  transition: all 0.3s ease;
  transform-origin: top;
  opacity: 0;
  transform: translateY(-1rem);
}

.open {
  opacity: 1;
  transform: translateY(0);
}
</style>
