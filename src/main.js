import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { vfmPlugin } from 'vue-final-modal'

createApp(App).use(router).use(vfmPlugin).mount('#app')