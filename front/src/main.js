import './assets/main.css'
import axios from 'axios'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './routes'

// process.env.VUE_APP_API_URL
axios.defaults.baseURL = import.meta.env.VITE_API_URL

createApp(App).use(router).mount('#app')
