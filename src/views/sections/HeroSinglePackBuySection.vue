<template>
  <div
    class="justify-center h-full w-full grid grid-cols-1 md:grid-cols-3 text-black items-start text-2xl gap-x-10 gap-y-10"
  >
    <router-link
      :to="{ name: 'BuyPackPage' }"
      class="flex text-white items-center hover:opacity-80 transition-all duration-300 col-span-full font-pp-monument-extended-light text-base leading-none"
    >
      <IconArrowLeft class="mr-2" /> BACK
    </router-link>

    <div class="col-span-1 md:col-span-2">
      <img class="w-full" :src="pack?.imagePath" alt="" />
    </div>
    <div class="col-span-1 md:col-span-1 flex flex-col gap-y-5">
      <h3
        :class="`text-${PackRarityColorEnum[pack?.rarity || 0]}`"
        class="font-pp-monument-extended-heavy text-3xl"
      >
        {{ pack?.price }} €
      </h3>
      <h2
        class="text-white font-pp-monument-extended-heavy text-xl md:text-2xl"
      >
        {{ pack?.name }}
      </h2>
      <p class="text-white font-pp-monument-extended-thin text-base">
        {{ pack?.description }}
      </p>

      <div
        :class="`bg-${PackRarityColorEnum[pack?.rarity || 0]}`"
        class="hexagon relative w-44 hover:translate-x-2 transition-all duration-300 cursor-pointer"
        @click="buy(String(pack?.id))"
      >
        <div
          class="absolute w-full text-white h-full flex items-center justify-center text-center text-base font-pp-monument-extended-light"
        >
          BUY
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { PropType } from 'vue'
import { useRouter } from 'vue-router'

import IconArrowLeft from '@/components/icons/IconArrowLeft.vue'

import { Pack } from '@/application/entity/types/index'
import { PackRarityColorEnum } from '@/application/entity/enum/pack-rarity-color.enum'
import { notifyError } from '@/composables/useNotification'

import { isLoggedIn } from '@/composables/useAuthentication'

const router = useRouter()

defineProps({
  pack: {
    type: Object as PropType<Pack | undefined>,
    required: true
  }
})

function buy(packId: string | undefined) {
  if (isLoggedIn.value) {
    router.push({ name: 'RevealPackPage', params: { packId } })
  } else {
    notifyError('Login to buy pack')
  }
}
</script>

<style lang="postcss" scoped>
.hexagon {
  height: 3.5rem;
  display: inline-block;
}
.hexagon:before {
  position: absolute;
  content: '';
}
.hexagon:before {
  @apply bg-blue-deep;
  top: 0.1rem; /* border width */
  left: 0.1rem; /* border width */
  height: calc(100% - 0.2rem); /* 100% - (2 * border width) */
  width: calc(100% - 0.2rem); /* 100% - (2 * border width) */
}
.hexagon,
.hexagon:before {
  clip-path: polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%);
}
</style>
