<template>
  <DefaultNavigationDrawer v-model:show-drawer="showMobileMenu" />
  <header
    class="bg-black lg:p-7 p-3 z-50 flex lg:h-[30vh] h-[15vh] justify-around items-center"
  >
    <a href="https://www.yellow-teapot.com/">
      <img
        class="col-span-5 lg:col-span-3 xl:col-span-4 object-contain lg:w-[26em] w-[214px]"
        src="/logo.png"
      />
    </a>
    <div
      class="col-span-7 flex-wrap justify-end align-middle items-center h-10 lg:hidden flex"
      @click="showMobileMenu = !showMobileMenu"
    >
      <MenuHamburguer :show-drawer="showMobileMenu" />
    </div>
    <div
      class="flex-wrap items-start w-[52em] gap-x-[45px] gap-y-[25px] pl-[5em] h-[50px] lg:flex hidden"
    >
      <div v-for="(link, index) in routes" :key="index" class="text-[1em]">
        <a
          class="link hover:opacity-75 transition-all duration-300"
          target="_blank"
          :href="link.url"
        >
          {{ link.displayText }}
        </a>
      </div>
    </div>
  </header>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import DefaultNavigationDrawer from '@/layouts/default/DefaultNavigationDrawer.vue'
import MenuHamburguer from '@/components/MenuHamburguer.vue'

import { routes } from '@/composables/useNavigationRoutes'

const showMobileMenu = ref(false)
</script>

<style lang="postcss" scoped>
.link {
  @apply cursor-pointer flex items-center uppercase text-white h-4;
}

.disabled-link {
  pointer-events: none;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
  opacity: 0.22;
}
.image-35 {
  width: 26.5625em;
}
</style>
