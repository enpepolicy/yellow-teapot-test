<template>
  <router-view />
</template>
<script lang="ts" setup>
import { onMounted, onBeforeUnmount } from 'vue'
import {
  initializeWallet,
  removeWindowEthereumListeners
} from './composables/useWallet'
onMounted(() => {
  initializeWallet()
})
onBeforeUnmount(() => {
  removeWindowEthereumListeners()
})
</script>
