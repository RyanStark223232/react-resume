<script setup lang="ts">
import { contactInfo } from '../data/data'
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="contact-container">
      <h2 class="section-title">Contact</h2>
      <div class="contact-grid">
        <div v-for="(contact, index) in contactInfo" :key="index" class="contact-box">
          <img :src="contact.image" alt="Contact Image" class="contact-image" />
          <p class="contact-text">{{ contact.text }}</p>
          <a :href="contact.linkUrl" target="_blank" rel="noopener noreferrer" class="contact-link">
            {{ contact.linkText }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
