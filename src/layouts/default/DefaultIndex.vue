<template>
  <div class="grid min-h-screen md:bg-60% lg:bg-40% bg-blue-deep">
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
