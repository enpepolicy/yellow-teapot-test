<template>
  <button
    :class="`${props.loading ? 'pointer-events-none ' : ''}`"
    class="px-2 py-4 mx-0 w-full border-2 border-white bg-black text-white hover:text-black hover:bg-white duration-500 rounded-full hover:brightness-110 disabled:pointer-events-none disabled:opacity-30 transition-all after:duration-100"
    type="button"
  >
    <div
      v-if="!props.loading"
      :class="innerTextClass"
      class="text-center w-full flex flex-wrap justify-center leading-non items-center"
    >
      {{ props.innerText }}
      <slot />
    </div>
    <base-loader v-else :scale="1" />
  </button>
</template>
<script setup lang="ts">
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
</script>
