<template>
  <div
    class="justify-start h-full w-full grid grid-cols-1 md:grid-cols-3 text-black items-start text-2xl gap-x-10 gap-y-10"
  >
    <div class="col-span-1 md:col-span-2 flex flex-col gap-y-8 text-center">
      <div class="flex flex-col gap-14 pb-14">
        <h3
          :class="`text-${PackRarityColorEnum[pack?.rarity || 0]}`"
          class="font-pp-monument-extended-heavy text-2xl md:text-3xl"
        >
          WHAT'S INSIDE ?
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3">
          <div>
            <div class="subtitle">10</div>
            <div class="caption">CARDS</div>
          </div>
          <div>
            <div class="subtitle">1</div>
            <div class="caption">GOLD MINIMUM</div>
          </div>
          <div>
            <div class="subtitle">5</div>
            <div class="caption">COLLECTIBLES</div>
          </div>
        </div>
      </div>
      <div>
        <h3
          :class="`text-${PackRarityColorEnum[pack?.rarity || 0]}`"
          class="font-pp-monument-extended-heavy text-4xl"
        >
          CARDS YOU COULD PULL
        </h3>
      </div>
      <div
        v-if="currentPackPosibleCards[0]"
        class="grid grid-cols-1 md:grid-cols-2 gap-y-16 pt-8 items-center bg-cards-grid justify-center px-10"
      >
        <BaseCarCard
          v-for="(card, index) in currentPackPosibleCards"
          :key="index"
          :card="card"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { PropType } from 'vue'

import BaseCarCard from '@/components/base/BaseCarCard.vue'

import { Pack, Card } from '@/application/entity/types/index'
import { PackRarityColorEnum } from '@/application/entity/enum/pack-rarity-color.enum'

defineProps({
  pack: {
    type: Object as PropType<Pack | undefined>,
    required: true
  },
  currentPackPosibleCards: {
    type: Object as PropType<Array<Card>>,
    required: true
  }
})
</script>
<style lang="postcss" scoped>
.bg-cards-grid {
  background-image: url('/logo.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
}
.subtitle {
  @apply text-8xl font-pp-monument-extended-heavy text-blue-deep;
  text-shadow: -0.15rem -0.15rem 0 white, 0.15rem -0.15rem 0 white,
    -0.15rem 0.15rem 0 white, 0.15rem 0.15rem 0 white;
}
.caption {
  @apply text-white font-pp-monument-extended-regular pb-16 md:pb-0;
}
</style>
