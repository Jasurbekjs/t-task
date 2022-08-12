import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { store } from './store'
import Maska from 'maska'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)

app.use(VueAxios, axios) 
app.use(Maska)
app.use(store)

app.mount('#app')
