<template>
  <div class="w-full h-full bg-main py-10 lg:py-16 px-8 lg:px-0">
    <div class="mx-auto max-w-5xl flex flex-col gap-y-16">
      <OwnedCardsListSection :owned-cards="ownedCards" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue'

import { Card } from '@/application/entity/types/index'
import { getOwnedCardsByUserUid } from '@/services/firebase'

import OwnedCardsListSection from '@/views/sections/OwnedCardsListSection.vue'

import { getCurrentUser } from '@/composables/useAuthentication'

const ownedCards = ref<Card[]>([])
const currentUserUid = ref('')

onBeforeMount(async () => {
  await getCurrentUser().then((user) => {
    currentUserUid.value = user.uid
  })
  ownedCards.value = await getOwnedCardsByUserUid(currentUserUid.value)
})
</script>

<style lang="postcss" scoped>
.bg-main {
  background-color: transparent;
  background-image: url('@/assets/images/background/garage.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>
