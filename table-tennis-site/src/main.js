// main.js
import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './assets/style.css'

const app = createApp(App)

app.mount('#app')

// Initialize AOS after mounting the app
AOS.init({
  once: true,        // only animate once
  duration: 800,     // animation duration
  easing: 'ease-in-out' // animation easing
})
