<template>
    <div class="w-full bg-blue-soft md:min-h-[28rem] hover:scale-105 transition-all duration-300 cursor-pointer">
        <img class="cover" :src="pack.imagePath" alt="">
        <div class="p-5 flex flex-col gap-3">
            <h2 :class="`text-${PackRarityColorEnum[pack.rarity]}`" class="font-pp-monument-extended-heavy text-xl md:text-2xl">{{ pack.name }}</h2>
            <p class="text-white font-pp-monument-extended-thin text-base">{{ pack.description }}</p>
            <h3 :class="`text-${PackRarityColorEnum[pack.rarity]}`" class="font-pp-monument-extended-heavy text-3xl md:text-3xl">{{ pack.price }} €</h3>
            <p class="text-white font-pp-monument-extended-thin text-sm">{{ pack.possibleContent }}</p>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { PropType } from 'vue';
import { Pack } from '@/application/entity/types/index'
import { PackRarityColorEnum } from '@/application/entity/enum/pack-rarity-color.enum'

defineProps({
  pack: {
    type: Object as PropType<Pack>,
    required: true,
  },
});
</script>