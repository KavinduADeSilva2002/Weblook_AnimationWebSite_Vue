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
      <button type="submit" class="submit-btn">Send Message</button>
    </form>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
const form = reactive({ name: '', email: '', phone: '', message: '' })

function submitForm() {
  console.log('Form submitted:', form)
  alert('Thanks! We will get back soon.')
  Object.keys(form).forEach(key => form[key] = '')
}
</script>
