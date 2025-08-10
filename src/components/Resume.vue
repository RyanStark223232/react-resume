<script setup lang="ts">
import { workExperience, education, skills, certifications } from '../data/data'
</script>

<template>
  <section id="resume" class="resume-section">
    <div class="resume-box">
      <!-- Work Experience -->
      <div class="resume-row">
        <div class="resume-title">Work Experience</div>
        <div class="resume-content">
          <div v-for="(job, index) in workExperience" :key="index" class="resume-card">
            <h4>{{ job.position }} at {{ job.company }}</h4>
            <p class="period">{{ job.period }}</p>
            <ul>
              <li v-for="(a, i) in job.achievements" :key="i">
                <p>● {{ a }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Education -->
      <div class="resume-row">
        <div class="resume-title">Education</div>
        <div class="resume-content">
          <div v-for="(edu, index) in education" :key="index" class="resume-card">
            <h4>{{ edu.degreeName }} - {{ edu.school }}</h4>
            <p>GPA: {{ edu.gpa }}</p>
            <ul>
              <li v-for="(a, i) in edu.awards" :key="i">
                <p>● {{ a }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Skills -->
      <div class="resume-row">
        <div class="resume-title">Technical Skills</div>
        <div class="resume-content skills-grid">
          <div v-for="(skillGroup, index) in skills" :key="index" class="resume-card">
            <h4>{{ skillGroup.session }}</h4>
            <ul>
              <li v-for="(skill, i) in skillGroup.skills" :key="i">
                {{ skill }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Certifications -->
      <div class="resume-row">
        <div class="resume-title">Professional Development & Certifications</div>
        <div class="resume-content">
          <div
            v-for="(cert, index) in certifications"
            :key="index"
            class="resume-card certification-card"
          >
            <a :href="cert.link" target="_blank" rel="noopener noreferrer">
              <img :src="cert.image" :alt="cert.certName" class="cert-image" />
            </a>
            <div class="cert-info">
              <h4>{{ cert.certName }}</h4>
              <p>{{ cert.issuer }} — {{ cert.period }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
