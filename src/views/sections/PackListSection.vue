<template>
  <div class="bg-blue-deep py-10 lg:py-16 px-8 lg:px-0">
    <div
      class="mx-auto max-w-5xl justify-center h-full w-full grid grid-cols-1 md:grid-cols-2 text-black items-start text-2xl gap-x-10 gap-y-14 md:gap-x-16 md:gap-y-24"
    >
      <BasePackCard
        v-for="(pack, index) in packRepository"
        :key="index"
        :pack="pack"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import BasePackCard from '@/components/base/BasePackCard.vue'
import { packRepository } from '@/database/packs'
</script>
