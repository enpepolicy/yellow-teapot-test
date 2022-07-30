<template>
  <div
    class="mx-auto justify-center h-full w-full flex flex-col text-black items-center text-2xl bg-main bg-cover"
  >
    <h1 class="text-center text-white font-pp-monument-extended-heavy">
      Oops!<br />
      Page not found
    </h1>
    <img class="w-44 opacity-90 py-10" src="/logo.png" />
    <router-link :to="{ name: 'HomePage' }" class="z-10 pb-10">
      <BaseBtn
        class="w-44 px-2 py-3 md:py-4"
        inner-text-class="text-xs "
        inner-text="GET ME OUT"
      />
    </router-link>
  </div>
</template>
<script lang="ts" setup>
import BaseBtn from '@/components/base/BaseBtn.vue'
</script>

<style lang="postcss" scoped>
.bg-main {
  background-color: black;
  background-image: url('@/assets/images/background/rectangle-blue-craft.png');
  background-repeat: no-repeat;
  background-position: center center;
}
</style>
