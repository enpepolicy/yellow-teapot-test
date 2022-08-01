<template>
  <div
    class="justify-start h-full w-full grid grid-cols-1 md:grid-cols-6 text-black items-start text-2xl gap-x-10 gap-y-10"
  >
    <div
      class="col-span-1 md:col-span-6 lg:col-span-5 flex flex-col gap-y-8 text-center"
    >
      <div
        v-if="ownedCards[0]"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 pt-10 pb-14 items-center justify-center px-10 bg-blue-deep/50"
      >
        <BaseCarCard
          v-for="(card, index) in ownedCards"
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
import { Card } from '@/application/entity/types/index'

defineProps({
  ownedCards: {
    type: Object as PropType<Array<Card>>,
    required: true
  }
})
</script>
