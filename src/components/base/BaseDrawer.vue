<template>
  <div
    :class="drawerClass"
    class="bg-black left-0 transition transform ease-in-out duration-300 z-50 w-full absolute gap-5 p-5"
  >
    <div class="flex flex-col relative w-full h-full">
      <div
        v-if="props.withClosingButton"
        class="ml-auto cursor-pointer py-3 text-white"
        @click="$emit('update:showDrawer', false)"
      >
        X
      </div>
      <div class="w-full h-full">
        <slot />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { watchEffect, computed } from 'vue'
defineEmits(['update:showDrawer'])

const props = defineProps({
  showDrawer: {
    type: Boolean,
    default: false
  },
  allowScrollY: {
    type: Boolean,
    default: false
  },
  withClosingButton: {
    type: Boolean,
    default: true
  }
})

watchEffect(() => {
  if (props.showDrawer && !props.allowScrollY) {
    document.documentElement.style.setProperty('overflow', 'hidden')
  } else {
    document.documentElement.style.removeProperty('overflow')
  }
})

const drawerClass = computed<string>((): string => {
  let classAccumulator = ''

  // Animates from left to right
  if (props.showDrawer) {
    classAccumulator += 'translate-x-0'
  } else {
    classAccumulator += '-translate-x-full'
  }

  if (props.allowScrollY) {
    classAccumulator += ''
  } else {
    classAccumulator += ' overflow-y-hidden overscroll-y-none h-full'
  }

  return classAccumulator
})
</script>
