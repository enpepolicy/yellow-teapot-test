<template>
  <div
    class="py-1 text-center mx-0 w-full rounded-full text-blue-deep text-xs font-pp-monument-extended-heavy uppercase"
  >
    Loading...
  </div>
</template>
<script lang="ts" setup>
defineProps({
  scale: {
    type: Number,
    default: 5
  }
})
</script>
