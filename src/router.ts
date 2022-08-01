import { createRouter, createWebHistory } from 'vue-router'
import { getCurrentUser } from '@/composables/useAuthentication'
import { notifyError } from './composables/useNotification'

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
        component: () => import('@/views/pack/buy/PackBuyListIndex.vue')
      },
      {
        path: 'pack/buy/:packId',
        name: 'BuyPackSinglePage',
        component: () => import('@/views/pack/buy/PackBuySingleIndex.vue')
      },
      {
        path: 'pack/reveal/:packId',
        name: 'RevealPackPage',
        meta: {
          requiresAuth: true
        },
        component: () => import('@/views/pack/reveal/PackRevealIndex.vue')
      },
      {
        path: 'my-garage',
        name: 'MyGaragePage',
        meta: {
          requiresAuth: true
        },
        component: () => import('@/views/my-garage/MyGarageIndex.vue')
      },
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

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next()
    } else {
      notifyError('Login to access this page')
      next('/')
    }
  } else {
    next()
  }
})

export default router
