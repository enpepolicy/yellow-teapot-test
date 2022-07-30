<template>
  <div
    class="mx-auto justify-center h-full w-full flex flex-col text-black items-center text-2xl"
  >
    <h1 class="font-akira-expanded text-center text-white">
      Oops!<br />
      Page not found
    </h1>
    <img class="w-44 opacity-90 py-10" src="/logo.png" />
    <router-link :to="{ name: 'HomePage' }" class="z-10 pb-10">
      <BaseBtn
        class="w-44 px-2 py-3 md:py-4"
        inner-text-class="text-xs font-akira-expanded "
        inner-text="GET ME OUT"
      />
    </router-link>
  </div>
</template>
<script lang="ts" setup>
import BaseBtn from '@/components/base/BaseBtn.vue'
</script>
