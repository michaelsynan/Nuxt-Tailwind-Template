<script lang="ts" setup></script>

<template>
  <div class="flex h-screen justify-center items-center px-4">
    <div class="grid grid-cols-2 gap-x-10 md:gap-x-20">
      <div class="col-span-2">
        <h1>Nuxt Tailwind Template w/ Pinia 🎉</h1>
      </div>
      <div class="col-span-1">
        <CallToAction />
      </div>
      <div class="col-span-1">
        <PiniaComponent />
      </div>
      <div class="col-span-2">
        Visit on <nuxt-link to="https://github.com/michaelsynan/Nuxt-Tailwind-Template">GitHub</nuxt-link>.
      </div>
    </div>
  </div>
</template>


<style scoped></style>
