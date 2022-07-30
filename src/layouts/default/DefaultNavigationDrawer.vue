<template>
  <base-drawer
    :show-drawer="props.showDrawer"
    :with-closing-button="false"
    class="min-h-screen px-2 pb-0 overflow-y-scroll"
    style="position: fixed"
    @update:show-drawer="$emit('update:showDrawer', $event)"
  >
    <div
      class="grid grid-cols-1 divide-y divide-gray-400/25 content-start h-full py-20 md:pt-32 px-6"
    >
      <div
        v-for="({ displayText, url }, index) in routes"
        :key="index"
        class="w-full py-4"
      >
        <a class="link hover:opacity-75" target="_blank" :href="url">
          {{ displayText }}
        </a>
      </div>
    </div>
  </base-drawer>
</template>

<script lang="ts" setup>
import { routes } from '@/composables/useNavigationRoutes'
import BaseDrawer from '@/components/base/BaseDrawer.vue'

defineEmits(['update:showDrawer'])

const props = defineProps({
  showDrawer: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="postcss" scoped>
.link {
  @apply cursor-pointer flex items-center uppercase text-xl text-white;
}
.mobile_menu {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.95) !important;
}

.disabled-link {
  pointer-events: none;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
  opacity: 0.4;
}
</style>
