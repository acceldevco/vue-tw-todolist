import { createApp } from 'vue'
import App from './App.vue'
import Index from './page/Index.vue'
import { createMemoryHistory, createRouter } from 'vue-router'
const routes = [
    { path: '/', component: Index},
    
  ]
// import './style.css'

const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })
createApp(App).use(router).mount('#app')
