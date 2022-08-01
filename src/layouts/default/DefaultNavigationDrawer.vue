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
        <router-link v-slot="{ isExactActive }" :to="to" @click="closeDrawer">
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
      <div class="pt-20">
        <div
          v-if="!currentAccount"
          class="link hover:opacity-75 text-white w-full py-4"
          @click="connect"
        >
          CONNECT WALLET
        </div>
        <div
          v-else
          class="link hover:opacity-75 text-white pointer-events-none w-full py-4"
        >
          {{ truncateAddress(currentAccount, 14) }}
        </div>
        <div
          class="link hover:opacity-75 text-green-soft w-full py-4"
          @click="
            isLoggedIn
              ? signOutUser()
                  .then(() => router.push({ name: 'HomePage' }))
                  .then(() => emits('update:showDrawer'))
              : signInUser().then(() => emits('update:showDrawer'))
          "
        >
          {{ isLoggedIn ? 'Logout' : 'Login' }}
        </div>
      </div>
    </nav>
  </base-drawer>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

import { truncateAddress } from '@/utils'
import BaseDrawer from '@/components/base/BaseDrawer.vue'

import { routes } from '@/composables/useNavigationRoutes'
import { currentAccount, connect } from '@/composables/useWallet'
import {
  signInUser,
  isLoggedIn,
  signOutUser
} from '@/composables/useAuthentication'

const router = useRouter()

const emits = defineEmits(['update:showDrawer'])
const props = defineProps({
  showDrawer: {
    type: Boolean,
    default: false
  }
})

function closeDrawer() {
  emits('update:showDrawer')
}
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
