<template>
  <div class="h-52 md:h-44 flex items-center">
    <BaseCarCard v-if="card.isOpen" :card="card" />
    <div v-else class="card h-full">
      <img
        class="h-full"
        src="/images/cards/placeholders/gold_card.png"
        :alt="card.name"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { PropType, watch } from 'vue'
import { CardForReveal } from '@/application/entity/types/index'
import BaseCarCard from '@/components/base/BaseCarCard.vue'

const props = defineProps({
  card: {
    type: Object as PropType<CardForReveal>,
    required: true
  }
})

watch(
  props.card,
  () => {
    if (props.card.isOpen) {
      console.log('revelando')
    }
  },
  { immediate: true }
)
</script>
<style lang="postcss" scoped>
.card {
  @apply mx-auto hover:-translate-y-2 transition-all duration-300 cursor-pointer;
}
</style>
