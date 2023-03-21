<script lang="ts" setup></script>

<template>
  <div class="flex h-screen justify-center items-center px-4 max-w-4xl mx-auto">
    <div class="grid grid-cols-5 gap-y-2 gap-x-10 md:gap-x-20">
      <div class="col-span-5">
        <h1>Nuxt Tailwind Template w/ Pinia 🎉</h1>
      </div>
      <div class="col-span-3">
        <CallToAction />
      </div>
      <div class="col-span-2">
        <PiniaComponent />
      </div>
      <div class="col-span-3 pt-2">
        <i-mdi-github style="color: white"
              class="text-2xl inline mr-3"  />
        <div class="inline align-bottom">Visit on <nuxt-link to="https://github.com/michaelsynan/Nuxt-Tailwind-Template">GitHub</nuxt-link>.</div>
      </div>
    </div>
  </div>
</template>


<style scoped></style>
