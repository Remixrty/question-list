import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/style/app.scss'

import App from './App.vue'
import router from './router'
import BaseSvg from "@/components/base/BaseSvg.vue";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('BaseSvg', BaseSvg)

app.mount('#app')
