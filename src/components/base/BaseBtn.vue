<template>
  <button
    :class="`${props.loading ? 'pointer-events-none ' : ''}`"
    class="hexagon px-10 py-4 mx-0 w-full bg-green-soft text-black duration-500 hover:brightness-75 disabled:pointer-events-none disabled:opacity-30 transition-all after:duration-100"
    type="button"
  >
    <div
      v-if="!props.loading"
      :class="innerTextClass"
      class="font-pp-monument-extended-regular text-center w-full flex flex-wrap justify-center leading-non items-center font-bold"
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
<style lang="postcss" scoped>
.hexagon {
  position: relative;
  clip-path: polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%);
}
</style>
