import { computed } from 'vue'

const routes = computed(() => {
  return [
    {
      displayText: 'PACKS',
      to: '/pack/buy'
    },
    {
      displayText: 'COLLECTIONS',
      to: '/collection'
    },
    {
      displayText: 'MY GARAGE',
      to: '/my-garage'
    }
  ]
})

export { routes }
