<script setup lang="ts">
import Page from './components/Page.vue'
import Header from './components/Header.vue'
import About from './components/About.vue'
import Resume from './components/Resume.vue'
import Portfolio from './components/Portfolio.vue'
import Contact from './components/Contact.vue'
import { Analytics } from "@vercel/analytics/vue"
import { homePageMeta } from './data/data'

// Import global styles
import './assets/styles/landing.css'

</script>

<template>

  // web analytics
  <Analytics mode="production" />
  
  <div class="app-container">
    <video autoplay loop muted class="background-video">
      <source src="./data/background-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <Page v-bind="homePageMeta">
      <Header />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
    </Page>
  </div>
</template>
