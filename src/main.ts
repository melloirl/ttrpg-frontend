import * as THREE from 'three'

import { createApp } from 'vue'
import App from './App.vue'
import i18n from './plugins/i18n'
import router from './router'
import './assets/css/main.css'

window.THREE = THREE

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
