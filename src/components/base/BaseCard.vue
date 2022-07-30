<template>
  <button
    :class="buttonClass + (props.loading ? ' pointer-events-none' : '')"
    class="mx-0 w-full bg-pink text-white font-bold hover:brightness-110"
    type="button"
  >
    <div
      v-if="!props.loading"
      :class="innerTextClass"
      class="text-center w-full flex flex-wrap justify-center leading-none items-center"
    >
      {{ props.innerText }}
      <slot />
    </div>
    <base-loader v-else :scale="1" />
  </button>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import BaseLoader from '@/components/base/BaseLoader.vue'

const props = defineProps({
  innerText: {
    type: String,
    default: ''
  },
  innerTextClass: {
    type: String,
    default: ''
  },
  loading: {
    type: Boolean,
    default: false
  },
  buttonVariation: {
    type: String,
    default: 'primary'
  }
})

const buttonClass = computed(() => {
  switch (props.buttonVariation) {
    case 'primary':
      return 'gradient-gold-btn btn-connect hover:gradient-gold-btn/80 disabled:opacity-30'

    case 'secondary':
      return 'border border-2 border-gold text-gold rounded-lg hover:border-white/80 hover:text-white/80 disabled:opacity-30 disabled:text-white/80 disabled:border-white/80'

    case 'disabled':
      return ' bg-stone-800 uppercase pointer-events-none border border-2 border-stone-400 text-stone-400 rounded-lg hover:border-white/80 hover:text-white/80 disabled:opacity-30 disabled:text-white/80 disabled:border-white/80'

    default:
      return 'gradient-gold-btn btn-connect hover:gradient-gold-btn/80 disabled:opacity-30'
  }
})
</script>
