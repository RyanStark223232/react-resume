<script setup lang="ts">
import { name, careerSummary, resumeLink } from '../data/data'
</script>

<template>
  <section id="about" class="about">
    <div class="about-box">
      <h2>{{ name }}</h2>
      <p class="summary">{{ careerSummary }}</p>
      <a :href="resumeLink" target="_blank" class="resume-link">View Resume</a>
    </div>
  </section>
</template>
