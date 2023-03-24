<script lang="ts" setup></script>

<template>
  <div class="flex h-screen justify-start md:justify-center items-start pt-20 md:pt-0 md:items-center px-4 max-w-4xl mx-auto">
    <div class="grid grid-cols-5 gap-y-6 gap-x-8 md:gap-x-20">
      <div class="col-span-5">
        <h1>Nuxt Tailwind Template <span class="inline-block">w/ Pinia 🎉</span></h1>
      </div>
      <div class="col-span-5 md:col-span-3">
        <CallToAction />
      </div>
      <div class="col-span-5 md:col-span-2">
        <PiniaComponent />
      </div>
      <div class="col-span-5 pt-2">
        <i-mdi-github style="color: white"
              class="text-2xl inline mr-3"  />
        <div class="inline align-bottom">Visit on <nuxt-link to="https://github.com/michaelsynan/Nuxt-Tailwind-Template">GitHub</nuxt-link>.</div>
      </div>
    </div>
  </div>
</template>


<style scoped></style>
