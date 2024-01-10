import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import pinia from './store'

import 'normalize.css'
import './assets/css/index.less'
import icons from './global/register-icons'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(icons)

app.mount('#app')
