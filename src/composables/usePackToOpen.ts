import { ref } from 'vue'
import { CardForReveal } from '@/application/entity/types/index'
import { getCardsByPackId } from '@/services/firebase'

const cardsToReveal = ref<CardForReveal[]>([])

async function createCardsToReveal(packId: number | string = 1, quantityToReveal = 7) {
  const cards = await getCardsByPackId(Number(packId)) || []
  const shuffleCards = cards.sort(() => 0.5 - Math.random());
  const randomCardsFromPack = shuffleCards.slice(0, quantityToReveal)

  cardsToReveal.value = randomCardsFromPack.map((card) => {
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
