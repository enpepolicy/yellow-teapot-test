<template>
  <div class="h-52 md:h-44 flex items-center w-full relative">
    <transition name="explosion-fade">
      <div
        v-show="showExplosion"
        class="card h-full absolute w-full -mt-10 duration-1000 z-50 scale-[1.8]"
      >
        <img
          class="h-full mx-auto"
          :src="
            isMainCard
              ? '/images/cards/placeholders/explosion-blue.png'
              : '/images/cards/placeholders/explosion-green.png'
          "
          :alt="card.name"
        />
      </div>
    </transition>
    <transition name="opacity">
      <BaseCarCard v-if="card.isOpen" class="absolute" :card="card" />
      <div v-else class="card h-full absolute w-full">
        <img
          class="h-full mx-auto"
          src="/images/cards/placeholders/gold_card.png"
          :alt="card.name"
        />
      </div>
    </transition>
  </div>
</template>
<script lang="ts" setup>
import { PropType, watch, ref } from 'vue'
import { CardForReveal } from '@/application/entity/types/index'
import BaseCarCard from '@/components/base/BaseCarCard.vue'

const props = defineProps({
  card: {
    type: Object as PropType<CardForReveal>,
    required: true
  },
  isMainCard: {
    type: Boolean,
    default: false
  }
})

const showExplosion = ref(false)

watch(
  props.card,
  () => {
    if (props.card.isOpen) {
      revealCard()
    }
  },
  { immediate: true }
)

function revealCard() {
  showExplosion.value = true
  setTimeout(() => {
    showExplosion.value = false
  }, 400)
}
</script>
<style lang="postcss" scoped>
.card {
  @apply mx-auto transition-all cursor-pointer;
}
.placeholder {
  background-size: 100% auto;
  background-image: url('/images/cards/placeholders/gold_card.png');
}
</style>
