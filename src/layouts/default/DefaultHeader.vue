<template>
  <DefaultNavigationDrawer v-model:show-drawer="showMobileMenu" />
  <header
    class="lg:px-20 px-8 z-50 fixed lg:absolute w-full flex lg:flex h-[5rem] justify-between items-center bg-blue-deep border-b-2"
  >
    <div class="flex items-center h-full">
      <router-link
        v-slot="{ isExactActive }"
        class="flex items-center gap-x-3 h-full"
        to="/"
      >
        <img
          class="col-span-5 lg:col-span-3 xl:col-span-4 object-contain w-[2.5rem]"
          src="/logo.png"
        />
        <div
          class="font-pp-monument-extended-light tracking-wider text-white text-2xl flex h-full items-center justify-center my-auto leading-none relative"
        >
          <div class="font-pp-monument-extended-regular">CAR</div>
          FT
          <IconTriangle v-if="isExactActive" />
        </div>
      </router-link>
      <div
        class="flex-wrap items-center w-[52em] gap-x-[45px] gap-y-[25px] pl-[5em] lg:flex hidden h-full"
      >
        <div
          v-for="(link, index) in routes"
          :key="index"
          class="text-[1em] h-full items-center flex"
        >
          <router-link
            v-slot="{ isExactActive }"
            class="link hover:opacity-75 transition-all duration-300 h-full relative flex justify-center"
            :to="link.to"
          >
            {{ link.displayText }}
            <IconTriangle v-if="isExactActive" />
          </router-link>
        </div>
      </div>
    </div>

    <div class="lg:flex hidden">
      <router-link to="/">
        <img
          class="col-span-5 lg:col-span-3 xl:col-span-4 object-contain w-[2.5rem]"
          src="/logo.png"
        />
      </router-link>
    </div>

    <div
      class="col-span-7 flex-wrap justify-end align-middle items-center h-10 lg:hidden flex"
      @click="showMobileMenu = !showMobileMenu"
    >
      <MenuHamburguer :show-drawer="showMobileMenu" />
    </div>
  </header>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import DefaultNavigationDrawer from '@/layouts/default/DefaultNavigationDrawer.vue'
import MenuHamburguer from '@/components/MenuHamburguer.vue'
import IconTriangle from '@/components/icons/IconTriangle.vue'

import { routes } from '@/composables/useNavigationRoutes'

const showMobileMenu = ref(false)
</script>

<style lang="postcss" scoped>
.link {
  @apply cursor-pointer flex items-center uppercase text-white font-pp-monument-extended-regular hover:text-green-soft transition-all duration-300;
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
