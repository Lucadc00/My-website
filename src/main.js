import { createApp } from 'vue'
import App from './App.vue'
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Projects from './components/Projects.vue'

createApp(App).mount('#app')

App.component('Header', Header)
App.component('Navbar', Navbar)
App.component('Footer', Footer)
App.component('Projects', Projects)

