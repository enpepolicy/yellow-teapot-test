<template>
  <router-view />
</template>
<script lang="ts" setup>
import { onMounted, onBeforeUnmount } from 'vue'
import {
  initializeWallet,
  removeWindowEthereumListeners
} from './composables/useWallet'
import { initializeFirebaseAuth } from './composables/useAuthentication'

import { initializeFirebaseApp } from '@/services/firebase'

onMounted(() => {
  initializeFirebaseApp()
  initializeFirebaseAuth()
  initializeWallet()
})
onBeforeUnmount(() => {
  removeWindowEthereumListeners()
})
</script>
