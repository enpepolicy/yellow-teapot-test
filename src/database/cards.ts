import { Card } from '../application/entity/types/index'
import { CardRarityEnum } from '@/application/entity/enum/card-rarity.enum'
import { CardRarityBackgroundPathEnum } from '@/application/entity/enum/card-rarity-background-path.enum'

const cardRepository: Card[] = [
  {
    id: 1,
    imagePath: '/images/cards/cars/bmw_i8.png',
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
    name: 'PORSCHE  911',
    rarity: CardRarityEnum.GOLD,
    packId: 1,
    score: 66
  },
  {
    id: 4,
    imagePath: '/images/cards/cars/bugathii_1.png',
    background: CardRarityBackgroundPathEnum.BLUE,
    name: 'PORSCHE  911',
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
    name: 'PORSCHE  911',
    rarity: CardRarityEnum.GOLD,
    packId: 1,
    score: 66
  },
  {
    id: 8,
    imagePath: '/images/cards/cars/abarth_205A2.png',
    background: CardRarityBackgroundPathEnum.GRAY,
    name: 'PORSCHE  911',
    rarity: CardRarityEnum.GOLD,
    packId: 2,
    score: 66
  },
  {
    id: 9,
    imagePath: '/images/cards/cars/bugathii_1.png',
    background: CardRarityBackgroundPathEnum.BLUE,
    name: 'PORSCHE  911',
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
    name: 'PORSCHE  911',
    rarity: CardRarityEnum.GOLD,
    packId: 3,
    score: 66
  },
  {
    id: 13,
    imagePath: '/images/cards/cars/bugathii_1.png',
    background: CardRarityBackgroundPathEnum.BLUE,
    name: 'PORSCHE  911',
    rarity: CardRarityEnum.BRONZE,
    packId: 3,
    score: 66
  },
  {
    id: 14,
    imagePath: '/images/cards/cars/bugathii_1.png',
    background: CardRarityBackgroundPathEnum.BLUE,
    name: 'PORSCHE  911',
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
  },
  {
    id: 17,
    imagePath: '/images/cards/cars/abarth_205A2.png',
    background: CardRarityBackgroundPathEnum.BRONZE,
    name: 'ABARTH 205A2',
    rarity: CardRarityEnum.GOLD,
    packId: 1,
    score: 25
  },
  {
    id: 18,
    imagePath: '/images/cards/cars/abarth_205A2.png',
    background: CardRarityBackgroundPathEnum.GRAY,
    name: 'ABARTH 205A2',
    rarity: CardRarityEnum.GOLD,
    packId: 1,
    score: 85
  },
  {
    id: 19,
    imagePath: '/images/cards/cars/abarth_205A2.png',
    background: CardRarityBackgroundPathEnum.RED,
    name: 'FERRARI 458',
    rarity: CardRarityEnum.GOLD,
    packId: 1,
    score: 86
  },
  {
    id: 20,
    imagePath: '/images/cards/cars/abarth_205A2.png',
    background: CardRarityBackgroundPathEnum.RED,
    name: 'FERRARI 458',
    rarity: CardRarityEnum.GOLD,
    packId: 2,
    score: 86
  },
  {
    id: 21,
    imagePath: '/images/cards/cars/bugathii_1.png',
    background: CardRarityBackgroundPathEnum.RED,
    name: 'BUGATTI',
    rarity: CardRarityEnum.GOLD,
    packId: 2,
    score: 87
  },
  {
    id: 22,
    imagePath: '/images/cards/cars/abarth_205A2.png',
    background: CardRarityBackgroundPathEnum.BRONZE,
    name: 'ABARTH 205A2',
    rarity: CardRarityEnum.SILVER,
    packId: 2,
    score: 8
  },
  {
    id: 23,
    imagePath: '/images/cards/cars/abarth_205A2.png',
    background: CardRarityBackgroundPathEnum.GRAY,
    name: 'PORSCHE  911',
    rarity: CardRarityEnum.GOLD,
    packId: 2,
    score: 66
  },
  {
    id: 24,
    imagePath: '/images/cards/cars/bugathii_1.png',
    background: CardRarityBackgroundPathEnum.BLUE,
    name: 'PORSCHE  911',
    rarity: CardRarityEnum.BRONZE,
    packId: 2,
    score: 66
  },
  {
    id: 25,
    imagePath: '/images/cards/cars/bugathii_1.png',
    background: CardRarityBackgroundPathEnum.BLUE,
    name: 'PORSCHE  911',
    rarity: CardRarityEnum.BRONZE,
    packId: 2,
    score: 66
  },
  {
    id: 26,
    imagePath: '/images/cards/cars/abarth_205A2.png',
    background: CardRarityBackgroundPathEnum.RED,
    name: 'BMW I8',
    rarity: CardRarityEnum.BRONZE,
    packId: 2,
    score: 45
  },
  {
    id: 27,
    imagePath: '/images/cards/cars/bugathii_1.png',
    background: CardRarityBackgroundPathEnum.BLUE,
    name: 'PORSCHE  911',
    rarity: CardRarityEnum.BRONZE,
    packId: 2,
    score: 66
  },
  {
    id: 28,
    imagePath: '/images/cards/cars/abarth_205A2.png',
    background: CardRarityBackgroundPathEnum.RED,
    name: 'BMW I8',
    rarity: CardRarityEnum.BRONZE,
    packId: 2,
    score: 45
  },
  {
    id: 29,
    imagePath: '/images/cards/cars/abarth_205A2.png',
    background: CardRarityBackgroundPathEnum.BRONZE,
    name: 'ABARTH 205A2',
    rarity: CardRarityEnum.BRONZE,
    packId: 2,
    score: 89
  },

  {
    id: 30,
    imagePath: '/images/cards/cars/bugathii_1.png',
    background: CardRarityBackgroundPathEnum.BLUE,
    name: 'PORSCHE  911',
    rarity: CardRarityEnum.BRONZE,
    packId: 3,
    score: 66
  },
  {
    id: 31,
    imagePath: '/images/cards/cars/abarth_205A2.png',
    background: CardRarityBackgroundPathEnum.RED,
    name: 'BMW I8',
    rarity: CardRarityEnum.BRONZE,
    packId: 3,
    score: 45
  },
  {
    id: 32,
    imagePath: '/images/cards/cars/abarth_205A2.png',
    background: CardRarityBackgroundPathEnum.BRONZE,
    name: 'ABARTH 205A2',
    rarity: CardRarityEnum.SILVER,
    packId: 3,
    score: 8
  },
  {
    id: 33,
    imagePath: '/images/cards/cars/abarth_205A2.png',
    background: CardRarityBackgroundPathEnum.GRAY,
    name: 'PORSCHE  911',
    rarity: CardRarityEnum.GOLD,
    packId: 3,
    score: 26
  },
  {
    id: 34,
    imagePath: '/images/cards/cars/bugathii_1.png',
    background: CardRarityBackgroundPathEnum.BLUE,
    name: 'PORSCHE  911',
    rarity: CardRarityEnum.BRONZE,
    packId: 3,
    score: 66
  },
  {
    id: 35,
    imagePath: '/images/cards/cars/bugathii_1.png',
    background: CardRarityBackgroundPathEnum.BLUE,
    name: 'PORSCHE  911',
    rarity: CardRarityEnum.BRONZE,
    packId: 3,
    score: 66
  },
  {
    id: 36,
    imagePath: '/images/cards/cars/bugathii_1.png',
    background: CardRarityBackgroundPathEnum.BLUE,
    name: 'PORSCHE  911',
    rarity: CardRarityEnum.BRONZE,
    packId: 3,
    score: 66
  },
  {
    id: 37,
    imagePath: '/images/cards/cars/abarth_205A2.png',
    background: CardRarityBackgroundPathEnum.RED,
    name: 'BMW I8',
    rarity: CardRarityEnum.BRONZE,
    packId: 3,
    score: 4
  },
  {
    id: 38,
    imagePath: '/images/cards/cars/abarth_205A2.png',
    background: CardRarityBackgroundPathEnum.BRONZE,
    name: 'ABARTH 205A2',
    rarity: CardRarityEnum.GOLD,
    packId: 4,
    score: 86
  },
  {
    id: 39,
    imagePath: '/images/cards/cars/abarth_205A2.png',
    background: CardRarityBackgroundPathEnum.BRONZE,
    name: 'ABARTH 205A2',
    rarity: CardRarityEnum.SILVER,
    packId: 4,
    score: 8
  },
  {
    id: 40,
    imagePath: '/images/cards/cars/abarth_205A2.png',
    background: CardRarityBackgroundPathEnum.GRAY,
    name: 'PORSCHE  911',
    rarity: CardRarityEnum.GOLD,
    packId: 4,
    score: 66
  },
  {
    id: 41,
    imagePath: '/images/cards/cars/bugathii_1.png',
    background: CardRarityBackgroundPathEnum.BLUE,
    name: 'PORSCHE  911',
    rarity: CardRarityEnum.BRONZE,
    packId: 4,
    score: 66
  },
  {
    id: 42,
    imagePath: '/images/cards/cars/abarth_205A2.png',
    background: CardRarityBackgroundPathEnum.RED,
    name: 'BMW I8',
    rarity: CardRarityEnum.BRONZE,
    packId: 4,
    score: 45
  },
  {
    id: 43,
    imagePath: '/images/cards/cars/abarth_205A2.png',
    background: CardRarityBackgroundPathEnum.BRONZE,
    name: 'ABARTH 205A2',
    rarity: CardRarityEnum.SILVER,
    packId: 4,
    score: 8
  },
  {
    id: 44,
    imagePath: '/images/cards/cars/bmw_i8.png',
    background: CardRarityBackgroundPathEnum.GRAY,
    name: 'PORSCHE  911',
    rarity: CardRarityEnum.GOLD,
    packId: 4,
    score: 66
  }
]

export { cardRepository }
