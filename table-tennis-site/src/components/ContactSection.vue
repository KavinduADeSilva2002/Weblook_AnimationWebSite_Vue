<template>
  <section id="contact" class="section" data-aos="zoom-in">
    <h2 class="section-title">Contact Us</h2>
    <p class="contact-intro">Join a club or start training today!</p>
    <form @submit.prevent="submitForm" class="contact-form" data-aos="fade-up" data-aos-delay="200">
      <div class="form-group">
        <label>Name</label>
        <input v-model="form.name" required placeholder="Enter your name" />
      </div>
      <div class="form-group">
        <label>Email</label>
        <input type="email" v-model="form.email" required placeholder="Enter your email" />
      </div>
      <div class="form-group">
        <label>Phone</label>
        <input type="tel" v-model="form.phone" required placeholder="Enter your phone" />
      </div>
      <div class="form-group">
        <label>Message</label>
        <textarea v-model="form.message" required placeholder="Your message"></textarea>
      </div>
      <button type="submit" class="submit-btn" :disabled="loading">
        {{ loading ? 'Sending...' : 'Send Message' }}
      </button>
    </form>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import emailjs from '@emailjs/browser'

const form = reactive({ name: '', email: '', phone: '', message: '' })
const loading = ref(false)

async function submitForm() {
  try {
    loading.value = true
    
    const templateParams = {
      to_name: 'Admin',
      to_email: 'kavinduanjana35@gmail.com',
      from_name: form.name,
      from_email: form.email,
      phone: form.phone,
      message: form.message
    }

    await emailjs.send(
      'service_g5xazgg',
      'template_9kt5roq',
      templateParams,
      'oBvOeut9DNhlaMrNg'  // Your public key
    )

    alert('Message sent successfully!')
    Object.keys(form).forEach(key => form[key] = '')
  } catch (error) {
    console.error('EmailJS Error:', error)
    alert('Failed to send message. Please try again.')
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>
