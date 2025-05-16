<script setup>
import NavbarSection from './components/NavbarSection.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import RulesSection from './components/RulesSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'

import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-in-out',
  })
})
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
