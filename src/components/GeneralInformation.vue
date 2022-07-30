<template>
  <div class="">
    <div class="w-full px-10 py-4 bg-dark">
      <div v-if="currentAccount">
        <div class="w-12/12 mx-auto relative">
          <div class="text-white font-bold">
            Rick Head Nft Quantity: {{ currentAccountNFTQuantity }}
          </div>
        </div>
        <div class="flex flex-wrap items-end gap-5">
          <button
            class="px-3 text-white rounded-sm bg-pink hover:bg-pink/50 font-medium transition duration-300 ease-in-out"
            @click="getAddressData()"
          >
            Reload
          </button>
          <div
            class="text-white/60 font-bold pt-2 text-base text-left col-span-2 md:col-span-3"
          >
            Last Updated
            {{ currentDate.toLocaleTimeString() }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import { currentAccount } from '@/composables/useWallet'
import { RickHeadERC721Contract } from '@/composables/contracts/useContractRickHeadERC721'

const currentAccountNFTQuantity = ref(undefined)
const currentDate = ref(new Date())
const contract = RickHeadERC721Contract

async function getCurrentAccountNFTQuantity() {
  const quantity = await contract.balanceOf(currentAccount.value)
  return quantity
}

async function getAddressData() {
  currentDate.value = new Date()
  currentAccountNFTQuantity.value = await getCurrentAccountNFTQuantity()
}

watchEffect(() => {
  if (currentAccount.value) {
    getAddressData()
  }
})
</script>
