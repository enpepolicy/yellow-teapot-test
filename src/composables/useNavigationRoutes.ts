import { computed } from 'vue'

const routes = computed(() => {
  return [
    {
      displayText: 'WHAT IS YELLOW TEAPOT?',
      url: 'https://www.yellow-teapot.com'
    },
    {
      displayText: 'HOW IT WORKS?',
      url: 'https://www.yellow-teapot.com'
    },
    {
      displayText: 'ROADMAP',
      url: 'https://www.yellow-teapot.com'
    }
  ]
})

export { routes }
