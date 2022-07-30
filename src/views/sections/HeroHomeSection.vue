<template>
  <div
    class="mx-auto justify-center h-full w-full flex flex-col text-black items-center text-2xl bg-main px-5 md:px-0"
  >
    <h1
      class="text-center text-white font-pp-monument-extended-heavy text-3xl md:text-5xl"
    >
      SUPERCAR<br />
      OWNER CIRCLE
    </h1>

    <div class="max-w-lg py-14 text-center text-white">
      <div class="font-pp-monument-extended-heavy">Win a Trip to Croatia</div>
      <div class="font-pp-monument-extended-light">
        to Experience the best of the Supercar World
      </div>
    </div>

    <router-link :to="{ name: 'BuyPackPage' }" class="z-10 pb-10">
      <BaseBtn
        class="w-80 py-3"
        inner-text-class="text-xl"
        inner-text="BUY FIRST PACKS"
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url('@/assets/images/background/landscape.jpg');
  background-repeat: no-repeat;
  background-position: center center;
}
</style>
