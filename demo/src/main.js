import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/App.css'
import './assets/font/font_ivjd0xk1xb/iconfont.css'

createApp(App).use(store).use(router).mount('#app')
