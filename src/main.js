import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import App from './App.vue'
import router from './router'

createApp(App).use(createPinia()).use(router).mount('#app')
