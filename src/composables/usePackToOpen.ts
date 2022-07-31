import { ref, computed } from 'vue'

import { CardForReveal } from '@/application/entity/types/index'

import { packRepository } from '@/database/packs'
import { cardRepository } from '@/database/cards'

const currentPack = computed(() => {
  return packRepository.find((pack) => pack.id === Number(1))
})

const cardsToReveal = ref<CardForReveal[]>([])

function createCardsToReveal() {
  const cards = cardRepository.filter(
    (card) => card.packId === Number(currentPack.value?.id)
  )
  cardsToReveal.value = cards.map((card) => {
    return {
      ...card,
      isOpen: false
    }
  })
}

export { createCardsToReveal, cardsToReveal }
