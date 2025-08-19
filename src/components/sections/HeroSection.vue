<template>
  <section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-dark-900 dark:to-dark-800">
    <div class="container-custom section-padding">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- 텍스트 콘텐츠 -->
        <div class="space-y-8">
          <div class="space-y-4">
            <h1 class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
              <span class="block hero-text animate-on-scroll" data-delay="0.1">안녕하세요, 저는</span>
              <span class="block text-primary-600 dark:text-primary-400 hero-text animate-on-scroll" data-delay="0.3">
                {{ store.developer.name }}입니다!
              </span>
            </h1>
            <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium hero-text animate-on-scroll" data-delay="0.5">
              {{ store.developer.title }}
            </p>
          </div>
          
          <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg hero-text animate-on-scroll" data-delay="0.7">
            {{ store.developer.bio }}
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 hero-text animate-on-scroll" data-delay="0.9">
            <router-link 
              to="/projects" 
              class="btn-primary text-center hover-lift"
            >
              프로젝트 보기
            </router-link>
            <router-link 
              to="/contact" 
              class="btn-secondary text-center hover-lift"
            >
              연락하기
            </router-link>
          </div>
          
          <!-- 소셜 링크 -->
          <div class="flex space-x-4 hero-text animate-on-scroll" data-delay="1.1">
            <a
              v-for="social in store.socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center space-x-2 px-4 py-3 bg-white dark:bg-dark-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover-lift"
              :title="social.name"
            >
              <component :is="getSocialIcon(social.icon)" class="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ social.name }}</span>
            </a>
          </div>
        </div>
        
        <!-- 이미지/아바타 -->
        <div class="flex justify-center lg:justify-end">
          <div class="relative hero-image animate-on-scroll" data-delay="0.5">
            <!-- 배경 원형 -->
            <div class="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            
            <!-- 아바타 이미지 -->
            <div class="relative w-80 h-80 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center shadow-2xl">
              <div class="w-72 h-72 bg-white dark:bg-dark-800 rounded-full flex items-center justify-center overflow-hidden">
                <img 
                  :src="profileImage" 
                  :alt="store.developer.name"
                  class="w-full h-full object-cover"
                  @error="handleImageError"
                />
              </div>
            </div>
            
            <!-- 플로팅 요소들 -->
            <div class="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce floating-element" data-delay="1.2">
              <CodeBracketIcon class="w-8 h-8 text-white" />
            </div>
            <div class="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center animate-bounce floating-element" data-delay="1.5">
              <WrenchScrewdriverIcon class="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
      
      <!-- 스크롤 다운 인디케이터 -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce scroll-indicator animate-on-scroll" data-delay="1.8">
        <ChevronDownIcon class="w-6 h-6 text-gray-400" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'
import { usePortfolioStore } from '@/stores/portfolio'
import { profileImage } from '@/utils/images'
import { 
  CodeBracketIcon, 
  WrenchScrewdriverIcon, 
  ChevronDownIcon,
  UserIcon,
  PhotoIcon,
  BookOpenIcon
} from '@heroicons/vue/24/outline'

const store = usePortfolioStore()

// 소셜 아이콘 매핑
const getSocialIcon = (iconName) => {
  const icons = {
    github: CodeBracketIcon,
    velog: BookOpenIcon
  }
  return icons[iconName] || CodeBracketIcon
}

// 이미지 에러 처리
const handleImageError = (event) => {
  const img = event.target
  const parent = img.parentElement
  parent.innerHTML = `
    <div class="text-center">
      <div class="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <span class="text-white text-3xl font-bold">${store.developer.name.charAt(0)}</span>
      </div>
      <p class="text-gray-600 dark:text-gray-400 font-medium">Frontend Developer</p>
    </div>
  `
}

// Hero 섹션 전용 애니메이션 설정
const setupHeroAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -20px 0px'
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
  const animateElements = document.querySelectorAll('.hero-text, .hero-image, .scroll-indicator')
  animateElements.forEach(el => observer.observe(el))
}

onMounted(async () => {
  await nextTick()
  setupHeroAnimations()
})
</script>

<style scoped>
/* Hero 섹션 전용 애니메이션 */
.hero-text {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
  will-change: transform, opacity;
}

.hero-text.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.hero-image {
  opacity: 0;
  transform: scale(0.8) translateY(30px);
  transition: all 1s ease;
  will-change: transform, opacity;
}

.hero-image.animate-in {
  opacity: 1;
  transform: scale(1) translateY(0);
}

.scroll-indicator {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
  will-change: transform, opacity;
}

.scroll-indicator.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.floating-element {
  opacity: 0;
  transform: scale(0.5);
  transition: all 0.6s ease;
  will-change: transform, opacity;
}

.floating-element.animate-in {
  opacity: 1;
  transform: scale(1);
}

/* 호버 효과 */
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  will-change: transform, box-shadow;
}

.hover-lift:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

/* 반응형 애니메이션 조정 */
@media (max-width: 768px) {
  .hero-text {
    transform: translateY(20px);
  }
  
  .hero-image {
    transform: scale(0.9) translateY(20px);
  }
}
</style>
