import { Card } from '../application/entity/types/index'
import { CardRarityEnum } from '@/application/entity/enum/card-rarity.enum'
import { CardRarityBackgroundPathEnum } from '@/application/entity/enum/card-rarity-background-path.enum'

const cardRepository: Card[] = [
  {
    id: 1,
    imagePath: '/images/cards/cars/abarth_205A2.png',
    background: CardRarityBackgroundPathEnum.RED,
    name: 'BMW I8',
    rarity: CardRarityEnum.BRONZE,
    packId: 1,
    score: 45
  },
  {
    id: 2,
    imagePath: '/images/cards/cars/abarth_205A2.png',
    background: CardRarityBackgroundPathEnum.BRONZE,
    name: 'ABARTH 205A2',
    rarity: CardRarityEnum.SILVER,
    packId: 1,
    score: 8
  },
  {
    id: 3,
    imagePath: '/images/cards/cars/abarth_205A2.png',
    background: CardRarityBackgroundPathEnum.GRAY,
    name: 'SUPERCAR OWNERS',
    rarity: CardRarityEnum.GOLD,
    packId: 1,
    score: 66
  },
  {
    id: 4,
    imagePath: '/images/cards/cars/bugathii_1.png',
    background: CardRarityBackgroundPathEnum.BLUE,
    name: 'SUPERCAR OWNERS',
    rarity: CardRarityEnum.BRONZE,
    packId: 1,
    score: 66
  },
  {
    id: 5,
    imagePath: '/images/cards/cars/abarth_205A2.png',
    background: CardRarityBackgroundPathEnum.RED,
    name: 'BMW I8',
    rarity: CardRarityEnum.BRONZE,
    packId: 1,
    score: 45
  },
  {
    id: 6,
    imagePath: '/images/cards/cars/abarth_205A2.png',
    background: CardRarityBackgroundPathEnum.BRONZE,
    name: 'ABARTH 205A2',
    rarity: CardRarityEnum.SILVER,
    packId: 1,
    score: 8
  },
  {
    id: 7,
    imagePath: '/images/cards/cars/abarth_205A2.png',
    background: CardRarityBackgroundPathEnum.GRAY,
    name: 'SUPERCAR OWNERS',
    rarity: CardRarityEnum.GOLD,
    packId: 1,
    score: 66
  },
  {
    id: 8,
    imagePath: '/images/cards/cars/abarth_205A2.png',
    background: CardRarityBackgroundPathEnum.GRAY,
    name: 'SUPERCAR OWNERS',
    rarity: CardRarityEnum.GOLD,
    packId: 2,
    score: 66
  },
  {
    id: 9,
    imagePath: '/images/cards/cars/bugathii_1.png',
    background: CardRarityBackgroundPathEnum.BLUE,
    name: 'SUPERCAR OWNERS',
    rarity: CardRarityEnum.BRONZE,
    packId: 2,
    score: 66
  },
  {
    id: 10,
    imagePath: '/images/cards/cars/abarth_205A2.png',
    background: CardRarityBackgroundPathEnum.RED,
    name: 'BMW I8',
    rarity: CardRarityEnum.BRONZE,
    packId: 3,
    score: 45
  },
  {
    id: 11,
    imagePath: '/images/cards/cars/abarth_205A2.png',
    background: CardRarityBackgroundPathEnum.BRONZE,
    name: 'ABARTH 205A2',
    rarity: CardRarityEnum.SILVER,
    packId: 3,
    score: 8
  },
  {
    id: 12,
    imagePath: '/images/cards/cars/abarth_205A2.png',
    background: CardRarityBackgroundPathEnum.GRAY,
    name: 'SUPERCAR OWNERS',
    rarity: CardRarityEnum.GOLD,
    packId: 3,
    score: 66
  },
  {
    id: 13,
    imagePath: '/images/cards/cars/bugathii_1.png',
    background: CardRarityBackgroundPathEnum.BLUE,
    name: 'SUPERCAR OWNERS',
    rarity: CardRarityEnum.BRONZE,
    packId: 3,
    score: 66
  },
  {
    id: 14,
    imagePath: '/images/cards/cars/bugathii_1.png',
    background: CardRarityBackgroundPathEnum.BLUE,
    name: 'SUPERCAR OWNERS',
    rarity: CardRarityEnum.BRONZE,
    packId: 4,
    score: 66
  },
  {
    id: 15,
    imagePath: '/images/cards/cars/abarth_205A2.png',
    background: CardRarityBackgroundPathEnum.RED,
    name: 'BMW I8',
    rarity: CardRarityEnum.BRONZE,
    packId: 4,
    score: 45
  },
  {
    id: 16,
    imagePath: '/images/cards/cars/abarth_205A2.png',
    background: CardRarityBackgroundPathEnum.BRONZE,
    name: 'ABARTH 205A2',
    rarity: CardRarityEnum.SILVER,
    packId: 4,
    score: 8
  }
]

export { cardRepository }
