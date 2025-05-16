<script setup>
import NavbarSection from './components/NavbarSection.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import RulesSection from './components/RulesSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'

import { onMounted, onUnmounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({
    duration: 800,
    once: false,
    offset: 200,
    easing: 'ease-in-out',
    mirror: true
  })

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  // Handle hero section visibility
  const hero = document.querySelector('.hero')
  if (window.scrollY > 100) {
    hero.classList.add('scrolled')
  } else {
    hero.classList.remove('scrolled')
  }

  // Handle sections animation
  const sections = document.querySelectorAll('.section')
  sections.forEach(section => {
    const rect = section.getBoundingClientRect()
    const isVisible = (rect.top <= window.innerHeight * 0.75) && (rect.bottom >= 0)
    
    if (isVisible) {
      section.classList.add('active')
    }
  })
}
</script>

<template>
  <NavbarSection />
  <HeroSection />
  <main class="content">
    <AboutSection />
    <RulesSection />
    <ContactSection />
  </main>
  <FooterSection />
</template>
