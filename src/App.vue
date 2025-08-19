<template>
  <div id="app" class="min-h-screen bg-gray-50 dark:bg-dark-900">
    <Navigation />
    <main>
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { usePortfolioStore } from '@/stores/portfolio'
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'

const store = usePortfolioStore()

onMounted(() => {
  // 다크모드 초기화
  const isDark = localStorage.getItem('darkMode') === 'true'
  if (isDark) {
    store.isDarkMode = true
    document.documentElement.classList.add('dark')
  }

  // 스무스 스크롤 설정
  setupSmoothScroll()
  
  // 스크롤 애니메이션 설정
  setupScrollAnimations()
})

// 스무스 스크롤 설정
const setupSmoothScroll = () => {
  // CSS 스무스 스크롤 적용
  document.documentElement.style.scrollBehavior = 'smooth'
  
  // 네비게이션 링크에 스무스 스크롤 적용
  const navLinks = document.querySelectorAll('a[href^="#"]')
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const targetId = link.getAttribute('href').substring(1)
      const targetElement = document.getElementById(targetId)
      
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80 // 네비게이션 높이만큼 조정
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        })
      }
    })
  })
}

// 최적화된 스크롤 애니메이션 설정
const setupScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.15, // 더 낮은 임계값
    rootMargin: '0px 0px -30px 0px' // 더 작은 마진
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 한 번 보인 요소는 계속 보이도록 유지
        if (!entry.target.classList.contains('animate-in')) {
          entry.target.classList.add('animate-in')
        }
      }
    })
  }, observerOptions)

  // 애니메이션 대상 요소들 관찰
  const animateElements = document.querySelectorAll('.animate-on-scroll')
  animateElements.forEach(el => observer.observe(el))
}
</script>

<style>
/* 페이지 전환 애니메이션 */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

/* 전역 스크롤 스타일 */
html {
  scroll-behavior: smooth;
  /* 스크롤 성능 최적화 */
  -webkit-overflow-scrolling: touch;
}

/* 스크롤바 스타일링 */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: rgba(156, 163, 175, 0.1);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: rgba(59, 130, 246, 0.3);
  border-radius: 5px;
  transition: background 0.3s ease;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(59, 130, 246, 0.5);
}

/* 다크모드 스크롤바 */
.dark ::-webkit-scrollbar-track {
  background: rgba(75, 85, 99, 0.1);
}

.dark ::-webkit-scrollbar-thumb {
  background: rgba(59, 130, 246, 0.4);
}

.dark ::-webkit-scrollbar-thumb:hover {
  background: rgba(59, 130, 246, 0.6);
}

/* 최적화된 스크롤 애니메이션 클래스 */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;
  /* 성능 최적화 */
  will-change: transform, opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
}

.animate-on-scroll.animate-in {
  opacity: 1;
  transform: translateY(0) translateZ(0);
}

/* 호버 효과 */
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  /* 성능 최적화 */
  will-change: transform, box-shadow;
  transform: translateZ(0);
  backface-visibility: hidden;
}

.hover-lift:hover {
  transform: translateY(-5px) translateZ(0);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

/* 부드러운 전환 효과 */
* {
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
}

/* 성능 최적화 */
.card, .btn, .nav-link {
  transform: translateZ(0);
  backface-visibility: hidden;
}
</style>
