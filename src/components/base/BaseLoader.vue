<template>
  <div class="text-center mx-0 w-full rounded-full text-white/60 text-xs">
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
