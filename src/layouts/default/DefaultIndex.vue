<template>
  <div class="grid min-h-screen bg-contain md:bg-60% lg:bg-40%">
    <DefaultHeader />
    <DefaultView />
    <DefaultNotificationsGroups />
  </div>
</template>

<script lang="ts" setup>
import DefaultNotificationsGroups from '@/layouts/default/DefaultNotificationsGroups.vue'
import DefaultHeader from '@/layouts/default/DefaultHeader.vue'
import DefaultView from '@/layouts/default/DefaultView.vue'
</script>

<style lang="postcss" scoped>
.bg-main {
  background-color: black;
  background-image: url('@/assets/images/background/main-dark.png');
  background-repeat: no-repeat;
  background-position: center center;
}
</style>
