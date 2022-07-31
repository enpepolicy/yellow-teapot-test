<template>
  <div
    class="hover:-translate-y-2 transition-all duration-300 relative h-[9.4rem] mx-auto w-[14rem]"
  >
    <img
      class="absolute z-0 w-[97%] mt-[0.35rem] h-full right-1"
      :src="card.background"
      alt=""
    />
    <img
      class="absolute z-20 w-full mt-[0.1rem]"
      :src="CardRarityFramePathEnum[card.rarity]"
      alt=""
    />
    <div class="absolute z-10 h-full flex items-center justify-center w-full">
      <img class="w-32" :src="card.imagePath" alt="" />
    </div>
    <div
      class="absolute px-5 flex flex-col gap-3 z-30 justify-center h-full w-full"
    >
      <h2
        :class="`text-${PackRarityColorEnum[card.rarity]}`"
        class="font-pp-monument-extended-heavy text-2xl md:text-2xl text-white pt-5"
      >
        {{ card.score }}
      </h2>
      <p
        class="text-white font-pp-monument-extended-thin text-base flex items-end justify-center h-full pb-2"
      >
        {{ card.name }}
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { PropType } from 'vue'
import { Card } from '@/application/entity/types/index'
import { PackRarityColorEnum } from '@/application/entity/enum/pack-rarity-color.enum'
import { CardRarityFramePathEnum } from '@/application/entity/enum/card-rarity-frame-path.enum'

defineProps({
  card: {
    type: Object as PropType<Card>,
    required: true
  }
})
</script>
