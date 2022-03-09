import { createApp } from 'vue'
import App from './App.vue'
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'

createApp(App).mount('#app')

App.component('Header', Header)
App.component('Navbar', Navbar)
