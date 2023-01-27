import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'
import './index.css'
import VueAxios from 'vue-axios'
const pinia = createPinia()
const app = createApp(App)
import axios from 'axios'
app.use(VueAxios, axios) 
app.use(pinia)
app.use(router)
app.use(VueAxios)
.mount('#app')

