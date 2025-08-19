<template>
  <section id="projects" class="section-padding bg-white dark:bg-dark-900">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 projects-title animate-on-scroll">
          Featured Projects
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto projects-subtitle animate-on-scroll">
          다양한 기술을 활용하여 개발한 프로젝트들을 소개합니다.
        </p>
      </div>

      <!-- 프로젝트 그리드 -->
      <div class="overflow-x-auto pb-4 mb-12 scrollbar-hide">
        <div class="flex space-x-8 min-w-max">
          <div 
            v-for="(project, index) in store.featuredProjects" 
            :key="project.id"
            class="group card overflow-hidden hover:shadow-2xl transition-all duration-500 project-card animate-on-scroll hover-lift w-80 flex-shrink-0"
            :data-delay="0.3 + index * 0.2"
          >
            <!-- 프로젝트 이미지 -->
            <div class="relative h-48 bg-gradient-to-br from-primary-500 to-primary-700 overflow-hidden project-image animate-on-scroll">
              <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <img 
                  v-if="project.image" 
                  :src="project.image" 
                  :alt="project.title"
                  class="w-full h-full object-cover"
                  @error="handleImageError"
                />
                <div v-else class="text-center text-white project-icon animate-on-scroll">
                  <FolderIcon class="w-16 h-16 mx-auto mb-4 opacity-80" />
                  <h3 class="text-xl font-bold">{{ project.title }}</h3>
                </div>
              </div>
              
              <!-- 호버 오버레이 -->
              <div class="absolute inset-0 bg-primary-600/90 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex items-center justify-center project-overlay animate-on-scroll">
                <div class="text-center text-white space-y-4">
                  <router-link 
                    :to="`/projects/${project.id}`" 
                    class="btn-primary bg-white text-primary-600 hover:bg-gray-100 transform scale-0 group-hover:scale-100 transition-transform duration-300"
                  >
                    자세히 보기
                  </router-link>
                </div>
              </div>
            </div>

            <!-- 프로젝트 정보 -->
            <div class="p-6 project-info animate-on-scroll">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200 project-title animate-on-scroll">
                {{ project.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 project-description animate-on-scroll">
                {{ project.description }}
              </p>
              
              <!-- 기술 스택 태그 -->
              <div class="flex flex-wrap gap-2 mb-4 project-tags animate-on-scroll">
                <span 
                  v-for="tech in project.technologies.slice(0, 3)" 
                  :key="tech"
                  class="px-2 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-xs rounded-full hover:scale-105 transition-transform duration-200"
                >
                  {{ tech }}
                </span>
                <span 
                  v-if="project.technologies.length > 3"
                  class="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 text-xs rounded-full hover:scale-105 transition-transform duration-200"
                >
                  +{{ project.technologies.length - 3 }}
                </span>
              </div>
              
              <!-- 링크 버튼들 -->
              <div class="flex space-x-2 project-links animate-on-scroll">
                <a 
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex-1 btn-secondary text-center text-sm py-2 hover-lift"
                >
                  <CodeBracketIcon class="w-4 h-4 inline mr-1" />
                  GitHub
                </a>
                <a 
                  v-if="project.live"
                  :href="project.live"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex-1 btn-secondary text-center text-sm py-2 hover-lift"
                >
                  <ArrowTopRightOnSquareIcon class="w-4 h-4 inline mr-1" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 더 많은 프로젝트 보기 버튼 -->
      <div class="text-center projects-cta animate-on-scroll" data-delay="1.0">
        <router-link to="/projects" class="btn-primary text-lg px-8 py-3 hover-lift">
          모든 프로젝트 보기
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'
import { usePortfolioStore } from '@/stores/portfolio'
import { FolderIcon, CodeBracketIcon, ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'

const store = usePortfolioStore()

// 이미지 에러 처리
const handleImageError = (event) => {
  const img = event.target
  const parent = img.parentElement
  
  // 이미지를 숨기고 기본 아이콘 표시
  img.style.display = 'none'
  const iconDiv = parent.querySelector('.project-icon')
  if (iconDiv) {
    iconDiv.style.display = 'block'
  } else {
    // 기본 아이콘이 없으면 생성
    const newIconDiv = document.createElement('div')
    newIconDiv.className = 'text-center text-white project-icon'
    newIconDiv.innerHTML = `
      <svg class="w-16 h-16 mx-auto mb-4 opacity-80" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
      <h3 class="text-xl font-bold">${event.target.alt}</h3>
    `
    parent.appendChild(newIconDiv)
  }
}

// Projects 섹션 전용 애니메이션 설정
const setupProjectsAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0
        setTimeout(() => {
          entry.target.classList.add('animate-in')
        }, delay * 1000)
      }
    })
  }, observerOptions)

  // 애니메이션 대상 요소들 관찰
  const animateElements = document.querySelectorAll('.projects-title, .projects-subtitle, .project-card, .project-image, .project-icon, .project-overlay, .project-info, .project-title, .project-description, .project-tags, .project-links, .projects-cta')
  animateElements.forEach(el => observer.observe(el))
}

onMounted(async () => {
  await nextTick()
  setupProjectsAnimations()
  setupHorizontalScroll()
})

// 가로 스크롤 설정
const setupHorizontalScroll = () => {
  const scrollContainer = document.querySelector('.overflow-x-auto')
  if (!scrollContainer) return

  scrollContainer.addEventListener('wheel', (e) => {
    e.preventDefault()
    scrollContainer.scrollLeft += e.deltaY
  })
}
</script>

<style scoped>
/* Projects 섹션 전용 애니메이션 */
.projects-title {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
  will-change: transform, opacity;
}

.projects-title.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.projects-subtitle {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease;
  will-change: transform, opacity;
}

.projects-subtitle.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.project-card {
  opacity: 0;
  transform: translateY(50px) scale(0.9);
  transition: all 0.8s ease;
  will-change: transform, opacity;
}

.project-card.animate-in {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.project-image {
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.6s ease;
  will-change: transform, opacity;
}

.project-card.animate-in .project-image {
  opacity: 1;
  transform: scale(1);
}

.project-icon {
  opacity: 0;
  transform: scale(0.5) rotate(180deg);
  transition: all 0.6s ease;
  will-change: transform, opacity;
}

.project-card.animate-in .project-icon {
  opacity: 1;
  transform: scale(1) rotate(0deg);
}

.project-overlay {
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.6s ease;
  will-change: transform, opacity;
}

.project-card.animate-in .project-overlay {
  opacity: 1;
  transform: scale(1);
}

.project-info {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
  will-change: transform, opacity;
}

.project-card.animate-in .project-info {
  opacity: 1;
  transform: translateY(0);
}

.project-title {
  opacity: 0;
  transform: translateY(15px);
  transition: all 0.6s ease;
  will-change: transform, opacity;
}

.project-card.animate-in .project-title {
  opacity: 1;
  transform: translateY(0);
}

.project-description {
  opacity: 0;
  transform: translateY(15px);
  transition: all 0.6s ease;
  will-change: transform, opacity;
}

.project-card.animate-in .project-description {
  opacity: 1;
  transform: translateY(0);
}

.project-tags {
  opacity: 0;
  transform: translateY(15px);
  transition: all 0.6s ease;
  will-change: transform, opacity;
}

.project-card.animate-in .project-tags {
  opacity: 1;
  transform: translateY(0);
}

.project-links {
  opacity: 0;
  transform: translateY(15px);
  transition: all 0.6s ease;
  will-change: transform, opacity;
}

.project-card.animate-in .project-links {
  opacity: 1;
  transform: translateY(0);
}

.projects-cta {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
  will-change: transform, opacity;
}

.projects-cta.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* 호버 효과 */
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  will-change: transform, box-shadow;
}

.hover-lift:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

/* 반응형 애니메이션 조정 */
@media (max-width: 768px) {
  .project-card {
    transform: translateY(30px) scale(0.95);
  }
  
  .projects-cta {
    transform: translateY(20px);
  }
}

/* 가로 스크롤바 스타일 */
.scrollbar-hide {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;  /* Chrome, Safari and Opera */
}

/* 부드러운 스크롤 */
.overflow-x-auto {
  scroll-behavior: smooth;
}
</style>
