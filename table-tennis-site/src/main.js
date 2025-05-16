// main.js
import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './assets/style.css'
import emailjs from '@emailjs/browser'

const app = createApp(App)

app.mount('#app')

// Initialize AOS with enhanced configuration
AOS.init({
  duration: 1000,
  once: false,
  mirror: true,
  offset: 200,
  easing: 'ease-in-out-cubic',
  anchorPlacement: 'top-bottom'
})

// Initialize EmailJS with your public key
emailjs.init('oBvOeut9DNhlaMrNg')
