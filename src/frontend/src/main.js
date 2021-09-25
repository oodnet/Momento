import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './index.css'

axios.defaults.baseURL = 'http://localhost:5000'

const app = createApp(App).use(router).use(store)

app.axios = axios
app.$http = axios
app.config.globalProperties.axios = axios
app.config.globalProperties.$http = axios

app.mount('#app')