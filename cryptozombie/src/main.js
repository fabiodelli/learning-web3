import { createApp } from 'vue'
import './style/general.scss'
import { router } from './router.js'
import App from './App.vue'

createApp(App).use(router).mount('#app')
