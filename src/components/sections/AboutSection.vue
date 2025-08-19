<template>
  <section id="about" class="section-padding bg-white dark:bg-dark-900">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 about-title animate-on-scroll">
          About Me
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto about-subtitle animate-on-scroll">
          저는 창의적이고 사용자 중심의 웹 애플리케이션을 개발하는 것을 좋아하는 개발자입니다.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- 이미지 섹션 -->
        <div class="relative about-image animate-on-scroll">
          <div class="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 shadow-2xl">
            <div class="bg-white dark:bg-dark-800 rounded-xl p-6">
              <div class="text-center space-y-4">
                <div class="w-32 h-32 bg-primary-600 rounded-full flex items-center justify-center mx-auto overflow-hidden profile-image animate-on-scroll" data-delay="0.3">
                  <img 
                    src="/portfolio/profile.jpeg" 
                    :alt="store.developer.name"
                    class="w-full h-full object-cover"
                    @error="handleImageError"
                  />
                </div>
                <div class="profile-info animate-on-scroll" data-delay="0.5">
                  <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ store.developer.name }}</h3>
                  <p class="text-primary-600 dark:text-primary-400 font-medium">{{ store.developer.title }}</p>
                </div>
                <div class="space-y-2 text-sm text-gray-600 dark:text-gray-400 profile-details animate-on-scroll" data-delay="0.7">
                  <div class="flex items-center justify-center space-x-2">
                    <MapPinIcon class="w-4 h-4" />
                    <span>{{ store.developer.location }}</span>
                  </div>
                  <div class="flex items-center justify-center space-x-2">
                    <EnvelopeIcon class="w-4 h-4" />
                    <span>{{ store.developer.email }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 플로팅 카드들 -->
          <div class="absolute -top-4 -right-4 bg-yellow-400 rounded-lg p-4 shadow-lg floating-card animate-on-scroll" data-delay="0.9">
            <div class="text-center">
              <div class="text-2xl font-bold text-white">프론트</div>
              <div class="text-xs text-white">개발자</div>
            </div>
          </div>
          <div class="absolute -bottom-4 -left-4 bg-green-400 rounded-lg p-4 shadow-lg floating-card animate-on-scroll" data-delay="1.1">
            <div class="text-center">
              <div class="text-2xl font-bold text-white">4+</div>
              <div class="text-xs text-white">프로젝트</div>
            </div>
          </div>
        </div>

        <!-- 콘텐츠 섹션 -->
        <div class="space-y-8 about-content animate-on-scroll">
          <div class="about-intro animate-on-scroll" data-delay="0.2">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">자기소개</h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ store.developer.bio }}
            </p>
          </div>

          <!-- 주요 기술 -->
          <div class="about-skills animate-on-scroll" data-delay="0.4">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">주요 기술</h3>
            <div class="grid grid-cols-2 gap-4">
              <div 
                v-for="(skill, index) in topSkills" 
                :key="skill.name"
                class="bg-gray-50 dark:bg-dark-800 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-dark-700 transition-all duration-300 hover:scale-105 skill-card animate-on-scroll"
                :data-delay="0.6 + index * 0.1"
              >
                <div class="flex items-center justify-between mb-2">
                  <span class="font-medium text-gray-900 dark:text-white">{{ skill.name }}</span>
                  <span class="text-sm text-primary-600 dark:text-primary-400">{{ skill.level }}%</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                  <div 
                    class="bg-primary-600 h-2 rounded-full transition-all duration-1000 skill-progress"
                    :style="{ width: skill.level + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- 버튼들 -->
          <div class="flex flex-col sm:flex-row gap-4 about-buttons animate-on-scroll" data-delay="0.8">
            <router-link to="/skills" class="btn-primary text-center hover-lift">
              기술 스택 보기
            </router-link>
            <router-link to="/experience" class="btn-secondary text-center hover-lift">
              이력 보기
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, nextTick } from 'vue'
import { usePortfolioStore } from '@/stores/portfolio'
import { MapPinIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'

const store = usePortfolioStore()

// 상위 기술 4개만 표시
const topSkills = computed(() => {
  return store.allSkills
    .sort((a, b) => b.level - a.level)
    .slice(0, 4)
})

// 이미지 에러 처리
const handleImageError = (event) => {
  const img = event.target
  const parent = img.parentElement
  parent.innerHTML = `
    <span class="text-white text-3xl font-bold">${store.developer.name.charAt(0)}</span>
  `
}

// About 섹션 전용 애니메이션 설정
const setupAboutAnimations = () => {
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
  const animateElements = document.querySelectorAll('.about-title, .about-subtitle, .about-image, .about-content, .about-intro, .about-skills, .about-buttons, .profile-image, .profile-info, .profile-details, .floating-card, .skill-card')
  animateElements.forEach(el => observer.observe(el))
}

onMounted(async () => {
  await nextTick()
  setupAboutAnimations()
})
</script>

<style scoped>
/* About 섹션 전용 애니메이션 */
.about-title {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
  will-change: transform, opacity;
}

.about-title.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.about-subtitle {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease;
  will-change: transform, opacity;
}

.about-subtitle.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.about-image {
  opacity: 0;
  transform: translateX(-50px) scale(0.9);
  transition: all 1s ease;
  will-change: transform, opacity;
}

.about-image.animate-in {
  opacity: 1;
  transform: translateX(0) scale(1);
}

.about-content {
  opacity: 0;
  transform: translateX(50px);
  transition: all 1s ease;
  will-change: transform, opacity;
}

.about-content.animate-in {
  opacity: 1;
  transform: translateX(0);
}

.about-intro {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
  will-change: transform, opacity;
}

.about-intro.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.about-skills {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
  will-change: transform, opacity;
}

.about-skills.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.about-buttons {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
  will-change: transform, opacity;
}

.about-buttons.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.profile-image {
  opacity: 0;
  transform: scale(0.5);
  transition: all 0.8s ease;
  will-change: transform, opacity;
}

.profile-image.animate-in {
  opacity: 1;
  transform: scale(1);
}

.profile-info {
  opacity: 0;
  transform: translateY(15px);
  transition: all 0.6s ease;
  will-change: transform, opacity;
}

.profile-info.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.profile-details {
  opacity: 0;
  transform: translateY(15px);
  transition: all 0.6s ease;
  will-change: transform, opacity;
}

.profile-details.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.floating-card {
  opacity: 0;
  transform: scale(0.5) rotate(10deg);
  transition: all 0.6s ease;
  will-change: transform, opacity;
}

.floating-card.animate-in {
  opacity: 1;
  transform: scale(1) rotate(0deg);
}

.skill-card {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
  will-change: transform, opacity;
}

.skill-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.skill-progress {
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 1s ease 0.3s;
}

.skill-card.animate-in .skill-progress {
  transform: scaleX(1);
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
  .about-image {
    transform: translateY(30px) scale(0.9);
  }
  
  .about-content {
    transform: translateY(30px);
  }
  
  .floating-card {
    transform: scale(0.7) rotate(5deg);
  }
}
</style>
