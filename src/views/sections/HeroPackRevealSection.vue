<template>
  <div
    class="mx-auto justify-center h-full w-full flex flex-col items-center text-2xl bg-main px-5 md:px-10 lg:px-0 bg-cover pb-14 pt-10"
  >
    <div
      v-if="cardsToReveal[0]"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-3xl gap-6 md:gap-10 text-center pb-8"
    >
      <BaseCarCardReveal
        class="card col-span-full xl:w-80 mx-auto"
        :card="cardsToReveal[0]"
        @click="revealCard(0)"
      />
      <template v-for="(card, index) in cardsToReveal">
        <BaseCarCardReveal
          v-if="index > 0"
          :key="index"
          :index="index"
          :card="card"
          @click="revealCard(index)"
        />
      </template>
    </div>
    <div class="max-w-xl text-center text-blue-deep">
      <div class="font-pp-monument-extended-heavy pb-5">
        {{
          areAllCardsRevealed
            ? 'YOUR CARAGE IS GROWING'
            : 'TOUCH CARDS TO REVEAL'
        }}
      </div>

      <div class="px-14">
        <BaseBtn
          :loading="revealAllLoading && !areAllCardsRevealed"
          :disabled="areAllCardsRevealed"
          class="mx-auto py-5"
          inner-text-class="text-xl"
          :inner-text="areAllCardsRevealed ? 'CARDS REVEALED' : 'REVEAL ALL'"
          @click="revealAllCards"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, computed } from 'vue'
import { createCardsToReveal, cardsToReveal } from '@/composables/usePackToOpen'

import BaseBtn from '@/components/base/BaseBtn.vue'
import BaseCarCardReveal from '@/components/base/BaseCarCardReveal.vue'

const revealAllLoading = ref(false)
const areAllCardsRevealed = computed(() => {
  if (cardsToReveal.value.find((card) => card.isOpen === false)) {
    return false
  }
  return true
})

function revealCard(index: number) {
  cardsToReveal.value[index].isOpen = true
}

async function revealAllCards() {
  if (!areAllCardsRevealed.value) {
    const recursiveReveal = () => {
      setTimeout(() => {
        if (!areAllCardsRevealed.value) {
          const indexForReveal = cardsToReveal.value.findIndex(
            (card) => card.isOpen === false
          )
          cardsToReveal.value[indexForReveal].isOpen = true
          recursiveReveal()
        } else {
          revealAllLoading.value = false
        }
      }, 2000)
    }
    revealAllLoading.value = true
    recursiveReveal()
  }
}

onMounted(async () => {
  await createCardsToReveal()
})
</script>

<style lang="postcss" scoped>
.bg-main {
  background-color: black;
  background-image: url('@/assets/images/background/rectangle-blue-craft-variant.png');
  background-repeat: no-repeat;
  background-position: center center;
}
</style>
