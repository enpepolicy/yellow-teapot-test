import { ref } from 'vue'
import { CardForReveal } from '@/application/entity/types/index'
import { cardRepository } from '@/database/cards'

const cardsToReveal = ref<CardForReveal[]>([])

function createCardsToReveal(packId: number | string = 1) {
  const cards = cardRepository.filter((card) => card.packId === Number(packId))

  cardsToReveal.value = cards.map((card) => {
    return {
      ...card,
      isOpen: false
    }
  })
}

function cleanCardsToReveal() {
  cardsToReveal.value = []
}

export { createCardsToReveal, cleanCardsToReveal, cardsToReveal }
