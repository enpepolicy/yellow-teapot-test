import App from '@/App.vue'
import router from '@/router'
import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import notifications from 'notiwind'
// import { store } from '@/store'

import '@/assets/index.postcss'

const head = createHead()
const app = createApp(App)

app.use(notifications)
app.use(router)
app.use(head)
// app.use(store)

app.mount('#app')
