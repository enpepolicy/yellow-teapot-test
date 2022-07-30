import { Card } from '../application/entity/types/index'
import { CardRarityEnum } from '@/application/entity/enum/card-rarity.enum'
import { CardRarityBackgroundPathEnum } from '@/application/entity/enum/card-rarity-background-path.enum'

const CardRepository: Card[] = [
  {
    id: 1,
    imagePath: '/images/Card/Cardage_owner_back.ong',
    background: CardRarityBackgroundPathEnum.BLUE,
    name: 'SUPERCAR OWNERS',
    rarity: CardRarityEnum.BRONZE,
    packId: 1,
    score: 66
  },
  {
    id: 2,
    imagePath: '/images/Card/Cardage_owner_back.ong',
    background: CardRarityBackgroundPathEnum.BLUE,
    name: 'SUPERCAR OWNERS',
    rarity: CardRarityEnum.BRONZE,
    packId: 1,
    score: 66
  },
  {
    id: 3,
    imagePath: '/images/Card/Cardage_owner_back.ong',
    background: CardRarityBackgroundPathEnum.BLUE,
    name: 'SUPERCAR OWNERS',
    rarity: CardRarityEnum.BRONZE,
    packId: 1,
    score: 66
  },
  {
    id: 4,
    imagePath: '/images/Card/Cardage_owner_back.ong',
    background: CardRarityBackgroundPathEnum.BLUE,
    name: 'SUPERCAR OWNERS',
    rarity: CardRarityEnum.BRONZE,
    packId: 1,
    score: 66
  }
]

export { CardRepository }
