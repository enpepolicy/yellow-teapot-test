<template>
  <div
    v-if="currentPack"
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
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import { Pack, Card } from '@/application/entity/types/index'
import { getPack, getCardsByPackId } from '@/services/firebase'

import HeroSinglePackBuySection from '@/views/sections/HeroSinglePackBuySection.vue'
import HeroSinglePackDetailsSection from '@/views/sections/HeroSinglePackDetailsSection.vue'

const route = useRoute()
const currentPack = ref<Pack>()
const currentPackPosibleCards = ref<Card[]>([])

onMounted(async () => {
  currentPack.value = await getPack(Number(route.params.packId))
  currentPackPosibleCards.value = await getCardsByPackId(
    Number(route.params.packId)
  )
})

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   // doc.data() will be undefined in this case
//   console.log("No such document!");
// }
</script>
