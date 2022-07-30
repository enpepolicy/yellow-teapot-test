<template>
  <div
    :class="`
        flex
        flex-row
        align-top
        items-center
        ${containerJustify}
        gap-1
      `"
  >
    <div
      v-if="showDays"
      :class="boxClass"
      class="w-20 md:w-24 h-24 flex flex-col items-center justify-center"
    >
      <span class="font-display text-4xl">{{ days }}</span
      ><span class="uppercase text-sm">Days</span>
    </div>
    <div
      :class="boxClass"
      class="w-20 md:w-24 h-24 flex flex-col items-center justify-center"
    >
      <span class="font-display text-4xl">{{
        showDays ? hours : days * 24 + hours
      }}</span
      ><span class="uppercase text-sm">Hours</span>
    </div>
    <div
      class="w-20 md:w-24 h-24 flex flex-col items-center justify-center"
      :class="boxClass"
    >
      <span class="font-display text-4xl">{{ minutes }}</span
      ><span class="uppercase text-sm">Minutes</span>
    </div>
    <div
      class="w-20 md:w-24 h-24 flex flex-col items-center justify-center"
      :class="boxClass"
    >
      <span class="font-display text-4xl">{{ seconds }}</span
      ><span class="uppercase text-sm">Seconds</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

const props = defineProps({
  endDate: {
    type: Date,
    default: new Date()
  },
  containerJustify: {
    type: String,
    default: 'justify-center'
  },
  showDays: {
    type: Boolean,
    default: true
  },
  showBackground: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['update:countdownExpired'])

const expired = ref(false)
const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

const boxClass = computed(() => {
  return `
    ${props.showBackground ? 'bg-black/75' : ''}
  `
})

onMounted(() => {
  updateTime()
})

const updateTime = () => {
  const now: number = new Date().getTime()

  if (props.endDate.getTime() < new Date().getTime()) {
    emit('update:countdownExpired', true)
    expired.value = true
    return
  }

  let distance: number = props.endDate.getTime() - now

  days.value = Math.floor(distance / (1000 * 60 * 60 * 24))
  hours.value = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  seconds.value = Math.floor((distance % (1000 * 60)) / 1000)
  setTimeout(updateTime, 500)
}
</script>
