import { createApp } from 'vue'
import Home from './views/Home.vue'
import App from './views/App.vue'
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Projects from './components/Projects.vue'
import About from './components/About.vue'


const app = createApp(App)

app.mount('#app')

