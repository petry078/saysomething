import './assets/normalization.css'
import 'primevue/resources/themes/lara-light-green/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import axios from 'axios'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './routes'
import PrimeVue from 'primevue/config'
import Toolbar from 'primevue/toolbar'
import Button from 'primevue/button'
import Menu from 'primevue/menu'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import ToastService from 'primevue/toastservice'
import Toast from 'primevue/toast'
import Textarea from 'primevue/textarea'
import { isLogged, setAuthorization } from './services/authentication/authentication'

// process.env.VUE_APP_API_URL
axios.defaults.baseURL = import.meta.env.VITE_API_URL
if (isLogged) {
  setAuthorization()
}

createApp(App)
  .component('Toolbar', Toolbar)
  .component('Button', Button)
  .component('Menu', Menu)
  .component('Card', Card)
  .component('InputText', InputText)
  .component('Toast', Toast)
  .component('Textarea', Textarea)
  .use(ToastService)
  .use(PrimeVue)
  .use(router)
  .mount('#app')
