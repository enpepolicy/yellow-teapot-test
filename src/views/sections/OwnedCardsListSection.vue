<template>
  <div
    class="justify-start h-full w-full grid grid-cols-1 md:grid-cols-6 text-black items-start text-2xl gap-x-10 gap-y-10"
  >
    <div
      class="col-span-1 md:col-span-6 lg:col-span-5 flex flex-col gap-y-8 text-center"
    >
      <div class="text-left p-4 bg-blue-lavanda text-blue-deep">
        <div class="pb-8 font-pp-monument-extended-heavy lg:text-2xl">
          WELCOME TO YOUR GARAGE
        </div>
        <div class="font-azo-sans-regular font-medium">
          Click on a card to get more infos of it. <br />
          Detailed garage coming soon on a next update !
        </div>
      </div>
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
      <div v-else>
        <div
          class="text-white/50 text-3xl text-center bg-blue-deep/50 font-pp-monument-extended-heavy py-14 px-10"
        >
          YOU DON'T HAVE CARDS YET!
        </div>
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
