<template>
  <header class="fixed top-0 left-0 right-0 z-50">
    <nav class="container mx-auto flex items-center justify-between p-4 z-50">
      <div class="z-50">
        <nuxt-link to="/" class="text-white text-xl font-bold border-none z-50 ">Nuxt Tailwind Starter</nuxt-link>
      </div>
      <div class="hidden lg:flex items-center space-x-8">
        <nuxt-link to="/" class="text-white border-none">Home</nuxt-link>
        <nuxt-link to="/docs" class="text-white border-none">Docs</nuxt-link>
        <a href="https://github.com/michaelsynan/Nuxt-Tailwind-Template" target="_blank" class="text-white border-none">GitHub</a>
      </div>
      <div class="lg:hidden z-40">
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
    <div id="nav-menu" :class="{ 'menu-open': isOpen }" class="bg-stone-900 p-4 lg:hidden h-1/2 shadow-md -mt-16 pt-20 z-40 transition-all transition-150 nav-menu opacity-0">
      <div class="flex flex-col items-start space-y-4 text-lg">
        <nuxt-link to="/" @click="isOpen = !isOpen" class="text-white border-none">Home</nuxt-link>
        <nuxt-link to="/docs" @click="isOpen = !isOpen" class="text-white border-none">Docs</nuxt-link>
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

.menu-open {
  opacity: 1;
  transform: translateY(0);
}
</style>
