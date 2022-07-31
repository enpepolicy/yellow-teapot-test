<template>
  <div
    class="py-10 lg:py-16 px-8 lg:px-0 mx-auto max-w-5xl flex flex-col gap-y-16"
  >
    <HeroSinglePackBuySection :pack="currentPack" />
    <HeroSinglePackDetailsSection
      :pack="currentPack"
      :current-pack-posible-cards="currentPackPosibleCards"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import HeroSinglePackBuySection from '@/views/sections/HeroSinglePackBuySection.vue'
import HeroSinglePackDetailsSection from '@/views/sections/HeroSinglePackDetailsSection.vue'

import { packRepository } from '@/database/packs'
import { cardRepository } from '@/database/cards'
const route = useRoute()

const currentPack = computed(() => {
  return packRepository.find((pack) => pack.id === Number(route.params.packId))
})

const currentPackPosibleCards = computed(() => {
  return cardRepository.filter(
    (card) => card.packId === Number(currentPack.value?.id)
  )
})
</script>
