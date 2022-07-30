<template>
  <div class="flex w-1/2 md:w-1/3 justify-end content-center absolute right-0">
    <span
      :class="
        currentNetworkId === 0
          ? 'bg-gray-600/80 font-regular'
          : currentNetworkId === 1
          ? 'bg-yellow-600 font-bold'
          : 'bg-green-600/90 font-bold'
      "
      class="rounded-full my-auto py-2 px-4 text-white mr-3"
    >
      {{
        currentNetworkId === 0
          ? 'No Chain'
          : String(NetworkEnum[currentNetworkId]).split('_').join(' ')
      }}
    </span>
  </div>
</template>
<script lang="ts" setup>
import { NetworkEnum } from '@/application/entity/enum/network.enum'
import { currentNetworkId } from '@/composables/useWallet'
</script>
