import { Pack } from '../application/entity/types/index'
import { PackStatusEnum } from '../application/entity/enum/pack-status.enum'
import { PackRarityEnum } from '@/application/entity/enum/pack-rarity.enum'

const packRepository: Pack[] = [
  {
    id: 1,
    description:
      'The finest of cars all in one. Includin rare cars and special prizes.',
    imagePath: '/images/packs/package_owner_back.png',
    name: 'SUPERCAR OWNERS',
    possibleContent: '1 GOLD GUARANTEED - 15 CARDS',
    price: 99,
    rarity: PackRarityEnum.SUPERCAR_OWNERS,
    status: PackStatusEnum.IN_STOCK
  },
  {
    id: 2,
    description:
      'The finest of cars all in one. Includin rare cars and special prizes.',
    imagePath: '/images/packs/package_gold_back.png',
    name: 'GOLD PACK',
    possibleContent: '1 GOLD GUARANTEED - 10 CARDS',
    price: 50,
    rarity: PackRarityEnum.GOLD,
    status: PackStatusEnum.IN_STOCK
  },
  {
    id: 3,
    description:
      'The finest of cars all in one. Includin rare cars and special prizes.',
    imagePath: '/images/packs/package_silver_back.png',
    name: 'SILVER PACK',
    possibleContent: '1 SILVER GUARANTEED - 10 CARDS',
    price: 20,
    rarity: PackRarityEnum.SILVER,
    status: PackStatusEnum.IN_STOCK
  },
  {
    id: 4,
    description:
      'The finest of cars all in one. Includin rare cars and special prizes.',
    imagePath: '/images/packs/package_bronze_back.png',
    name: 'BRONZE PACK',
    possibleContent: '1 BRONZE GUARANTEED - 10 CARDS',
    price: 9,
    rarity: PackRarityEnum.BRONZE,
    status: PackStatusEnum.IN_STOCK
  }
]

export { packRepository }
