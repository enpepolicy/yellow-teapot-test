import { PackStatusEnum } from '../enum/pack-status.enum'
import { PackRarityEnum } from '../enum/pack-rarity.enum'
import { CardRarityEnum } from '../enum/card-rarity.enum'
import { CardRarityBackgroundPathEnum } from '../enum/card-rarity-background-path.enum'

interface Pack {
  id: number
  imagePath: string
  name: string
  description: string
  price: number
  possibleContent: string
  rarity: PackRarityEnum
  status: PackStatusEnum
}

interface Card {
  id: number
  packId: number
  name: string
  score: number
  imagePath: string
  rarity: CardRarityEnum
  background: CardRarityBackgroundPathEnum
}

interface CardForReveal extends Card {
  isOpen: boolean
}

export { Pack, Card, CardForReveal }
