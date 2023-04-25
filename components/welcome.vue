<script lang="ts" setup></script>

<template>
  <div class="flex h-screen justify-start md:justify-center items-start pt-20 md:pt-0 md:items-center px-4 max-w-4xl mx-auto text-white">
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

<style>
body {
  background-color: #1c1917;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23937fb3' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>
