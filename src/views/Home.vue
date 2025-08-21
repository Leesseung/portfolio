<template>
  <div class="scroll-snap-container pt-16">
    <!-- Hero Section -->
    <div class="scroll-snap-section animate-on-scroll" data-section="hero">
      <HeroSection />
    </div>
    
    <!-- About Section -->
    <div class="scroll-snap-section animate-on-scroll" data-section="about">
      <AboutSection />
    </div>
    
    <!-- Skills Section -->
    <div class="scroll-snap-section animate-on-scroll" data-section="skills">
      <SkillsSection />
    </div>
    
    <!-- Projects Section -->
    <div class="scroll-snap-section animate-on-scroll" data-section="projects">
      <ProjectsSection />
    </div>
    
    <!-- Experience Section -->
    <div class="scroll-snap-section animate-on-scroll" data-section="experience">
      <ExperienceSection />
    </div>
    
    <!-- Contact Section -->
    <div class="scroll-snap-section animate-on-scroll" data-section="contact">
      <ContactSection />
    </div>
  </div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

// Home 페이지 전용 스크롤 애니메이션 설정
const setupHomeScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 섹션별로 다른 애니메이션 효과 적용
        const section = entry.target.dataset.section
        entry.target.classList.add('animate-in')
        
        // 섹션별 추가 애니메이션 클래스
        switch(section) {
          case 'hero':
            entry.target.classList.add('fade-in-up')
            break
          case 'about':
            entry.target.classList.add('slide-in-left')
            break
          case 'skills':
            entry.target.classList.add('slide-in-right')
            break
          case 'projects':
            entry.target.classList.add('fade-in-scale')
            break
          case 'experience':
            entry.target.classList.add('slide-in-up')
            break
          case 'contact':
            entry.target.classList.add('fade-in-up')
            break
        }
      }
    })
  }, observerOptions)

  // 모든 섹션 요소들을 관찰
  const sections = document.querySelectorAll('[data-section]')
  sections.forEach(section => observer.observe(section))
}

onMounted(async () => {
  await nextTick()
  setupHomeScrollAnimations()
})
</script>

<style scoped>
/* 스크롤 스냅 컨테이너 */
.scroll-snap-container {
  scroll-snap-type: y proximity;
  scroll-behavior: smooth;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
}

/* 스크롤 스냅 섹션 */
.scroll-snap-section {
  scroll-snap-align: start;
  scroll-snap-stop: always;
  min-height: 100vh;
  position: relative;
  /* 화면 비율 유지를 위한 설정 */
  box-sizing: border-box;
}

/* Home 페이지 전용 스크롤 애니메이션 */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
  will-change: transform, opacity;
}

.animate-on-scroll.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* 섹션별 애니메이션 효과 */
.fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.slide-in-left {
  animation: slideInLeft 0.8s ease-out forwards;
}

.slide-in-right {
  animation: slideInRight 0.8s ease-out forwards;
}

.fade-in-scale {
  animation: fadeInScale 0.8s ease-out forwards;
}

.slide-in-up {
  animation: slideInUp 0.8s ease-out forwards;
}

/* 애니메이션 키프레임 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 반응형 스크롤 스냅 조정 */
@media (max-width: 768px) {
  .scroll-snap-container {
    scroll-snap-type: y mandatory;
  }
  
  .scroll-snap-section {
    min-height: 100vh;
  }
  
  .animate-on-scroll {
    transform: translateY(20px);
  }
  
  .slide-in-left,
  .slide-in-right {
    animation: fadeInUp 0.8s ease-out forwards;
  }
}

/* 스크롤 스냅 성능 최적화 */
.scroll-snap-container {
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: rgba(59, 130, 246, 0.3) transparent;
  /* 성능 최적화 */
  will-change: scroll-position;
  transform: translateZ(0);
  backface-visibility: hidden;
}

/* 스크롤 스냅 시 부드러운 전환 */
.scroll-snap-section {
  transition: transform 0.3s ease-out;
  /* 성능 최적화 */
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
}

/* 스크롤 스냅 시 섹션별 미묘한 배경 효과 */
.scroll-snap-section[data-section="hero"] {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.02) 0%, rgba(147, 51, 234, 0.02) 100%);
}

.scroll-snap-section[data-section="about"] {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.02) 0%, rgba(59, 130, 246, 0.02) 100%);
}

.scroll-snap-section[data-section="skills"] {
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.02) 0%, rgba(16, 185, 129, 0.02) 100%);
}

.scroll-snap-section[data-section="projects"] {
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.02) 0%, rgba(245, 158, 11, 0.02) 100%);
}

.scroll-snap-section[data-section="experience"] {
  background: linear-gradient(135deg, rgba(147, 51, 234, 0.02) 0%, rgba(239, 68, 68, 0.02) 100%);
}

.scroll-snap-section[data-section="contact"] {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.02) 0%, rgba(16, 185, 129, 0.02) 100%);
}

/* 다크모드에서의 배경 효과 */
.dark .scroll-snap-section[data-section="hero"] {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%);
}

.dark .scroll-snap-section[data-section="about"] {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%);
}

.dark .scroll-snap-section[data-section="skills"] {
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.05) 0%, rgba(16, 185, 129, 0.05) 100%);
}

.dark .scroll-snap-section[data-section="projects"] {
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.05) 0%, rgba(245, 158, 11, 0.05) 100%);
}

.dark .scroll-snap-section[data-section="experience"] {
  background: linear-gradient(135deg, rgba(147, 51, 234, 0.05) 0%, rgba(239, 68, 68, 0.05) 100%);
}

.dark .scroll-snap-section[data-section="contact"] {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(16, 185, 129, 0.05) 100%);
}
</style>
