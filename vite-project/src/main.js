import {createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from 'axios'
import'./mock/mock.js'
import router from './index'

const app = createApp(App).use(router)
app.config.globalProperties.$axios = axios
app.mount('#app')