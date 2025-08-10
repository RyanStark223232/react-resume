<script setup lang="ts">
import { portfolioItems } from '../data/data'
</script>

<template>
  <section id="portfolio" class="portfolio-section">
    <div class="portfolio-box">
      <h2 class="section-title">Portfolio</h2>
      <div class="portfolio-grid">
        <div v-for="(item, index) in portfolioItems" :key="index" class="portfolio-item">
          <component
            :is="item.link ? 'a' : 'div'"
            :href="item.link || undefined"
            target="_blank"
            rel="noopener noreferrer"
            class="portfolio-image-wrapper"
          >
            <img :src="item.image" :alt="item.title" class="portfolio-image" />
            <div class="portfolio-overlay">
              <div class="overlay-content">
                <h4>{{ item.title }}</h4>
                <p class="overlay-description">{{ item.description }}</p>
                <ul class="overlay-skills">
                  <li v-for="(skill, i) in item.skillsUsed" :key="i">{{ skill }}</li>
                </ul>
              </div>
            </div>
          </component>
        </div>
      </div>
    </div>
  </section>
</template>
