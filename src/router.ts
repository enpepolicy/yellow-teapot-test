import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/DefaultIndex.vue'),
    meta: {
      title: 'Yellow Teapot | Test'
    },
    children: [
      {
        path: '',
        name: 'HomePage',
        component: () => import('@/views/home/HomeIndex.vue')
      },
      {
        path: 'pack/buy',
        name: 'BuyPackPage',
        component: () => import('@/views/pack/buy/PackBuyIndex.vue')
      },
      {
        path: 'pack/reveal',
        name: 'RevealPackPage',
        component: () => import('@/views/pack/reveal/PackRevealIndex.vue')
      },
      // {
      //   path: 'collection',
      //   name: 'CollectionPage',
      //   component: () => import('@/views/ticket/mint/Index.vue')
      // },
      {
        path: 'not-found',
        name: 'FourOhFourPage',
        component: () => import('@/views/not-found/NotFoundIndex.vue')
      },
      {
        path: ':catchAll(.*)',
        redirect: () => {
          return { name: 'FourOhFourPage' }
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
