<template>
  <base-drawer
    :show-drawer="props.showDrawer"
    :with-closing-button="false"
    class="min-h-screen px-2 pb-0 overflow-y-scroll-hidden bg-blue-deep"
    style="position: fixed"
    @update:show-drawer="$emit('update:showDrawer', $event)"
  >
    <nav
      class="grid grid-cols-1 divide-y divide-gray-400/25 content-start h-full py-20 md:pt-32 px-6"
    >
      <div
        v-for="({ displayText, to }, index) in routes"
        :key="index"
        class="w-full py-4"
      >
        <router-link v-slot="{ isExactActive }" :to="to">
          <span
            :class="
              isExactActive
                ? 'text-green-soft font-bold link'
                : 'link hover:opacity-75 text-white '
            "
          >
            {{ displayText }}
          </span>
        </router-link>
      </div>
    </nav>
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
  @apply cursor-pointer flex items-center uppercase text-xl font-pp-monument-extended-regular hover:text-green-soft transition-all duration-300;
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
