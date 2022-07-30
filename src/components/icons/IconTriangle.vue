<template>
  <div class="flex justify-center h-full absolute">
    <div class="arrow-up absolute"></div>
    <div class="arrow-up-medium absolute"></div>
    <div class="arrow-up-small absolute"></div>
  </div>
</template>
<style lang="postcss" scoped>
.arrow-up {
  @apply border-b-[0.8rem] border-green-soft;
  bottom: 0;
  border-left: 0.8rem solid transparent;
  border-right: 0.8rem solid transparent;
}
.arrow-up-medium {
  @apply border-b-[0.7rem] border-blue-deep;
  bottom: 0;
  border-left: 0.7rem solid transparent;
  border-right: 0.7rem solid transparent;
}
.arrow-up-small {
  @apply border-b-[0.55rem] border-green-soft;
  bottom: 0;
  border-left: 0.55rem solid transparent;
  border-right: 0.55rem solid transparent;
}
</style>
