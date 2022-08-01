import { computed } from 'vue'

const routes = computed(() => {
  return [
    {
      displayText: 'PACKS',
      to: '/pack/buy'
    },
    {
      displayText: 'MY GARAGE',
      to: '/my-garage'
    },
    {
      displayText: 'COLLECTIONS',
      to: '/collection'
    }
  ]
})

export { routes }
