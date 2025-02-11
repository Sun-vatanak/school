
import './assets/css/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import '@/assets/css/theme.css'
import { createApp } from 'vue'
import axios from 'axios'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { en } from '@/lang/en'
import { km } from '@/lang/km'

import App from './App.vue'
import router from './router'

axios.defaults.baseURL = import.meta.env.VITE_API_HOST

const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem('language') ? localStorage.getItem('language') : 'km',
    fallbackLocale: 'en',
    messages: {
        en: en,
        km: km
    }
})


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')

export { i18n };
