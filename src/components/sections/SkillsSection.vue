<template>
  <section id="skills" class="section-padding bg-gray-50 dark:bg-dark-800">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 skills-title animate-on-scroll">
          Skills & Technologies
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto skills-subtitle animate-on-scroll">
          다양한 기술 스택을 활용하여 창의적인 솔루션을 제공합니다.
        </p>
      </div>

      <div class="space-y-12">
        <div 
          v-for="(category, categoryIndex) in store.skills" 
          :key="category.category"
          class="skill-category animate-on-scroll"
          :data-delay="categoryIndex * 0.2"
        >
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center category-title animate-on-scroll">
            {{ category.category }}
          </h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              v-for="(skill, skillIndex) in category.items" 
              :key="skill.name"
              class="card p-6 hover:scale-105 transition-all duration-300 skill-card animate-on-scroll hover-lift"
              :data-delay="0.3 + categoryIndex * 0.2 + skillIndex * 0.1"
            >
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center skill-icon animate-on-scroll">
                    <component :is="getSkillIcon(skill.icon)" class="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <span class="font-semibold text-gray-900 dark:text-white">{{ skill.name }}</span>
                </div>
                <span class="text-sm font-medium text-primary-600 dark:text-primary-400 skill-level animate-on-scroll">
                  {{ skill.level }}%
                </span>
              </div>
              
              <!-- 프로그레스 바 -->
              <div class="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-3 mb-4">
                <div 
                  class="bg-gradient-to-r from-primary-500 to-primary-600 h-3 rounded-full transition-all duration-1000 ease-out skill-progress"
                  :style="{ width: skill.level + '%' }"
                ></div>
              </div>
              
              <!-- 레벨 표시 -->
              <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400 level-labels animate-on-scroll">
                <span>초급</span>
                <span>중급</span>
                <span>고급</span>
                <span>전문가</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 추가 정보 -->
      <div class="mt-16 text-center skills-info animate-on-scroll" data-delay="0.8">
        <div class="bg-white dark:bg-dark-900 rounded-2xl p-8 shadow-lg hover-lift">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 info-title animate-on-scroll">
            지속적인 학습
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto info-description animate-on-scroll">
            기술의 빠른 발전에 맞춰 새로운 기술과 프레임워크를 지속적으로 학습하고 있습니다.
            최신 트렌드를 파악하고 실제 프로젝트에 적용하는 것을 즐깁니다.
          </p>
          <div class="flex flex-wrap justify-center gap-4 info-tags animate-on-scroll">
            <span class="px-4 py-2 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200">
              새로운 기술 학습
            </span>
            <span class="px-4 py-2 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200">
              오픈소스 기여
            </span>
            <span class="px-4 py-2 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200">
              기술 블로그 작성
            </span>
            <span class="px-4 py-2 bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200">
              개발자 커뮤니티 활동
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'
import { usePortfolioStore } from '@/stores/portfolio'
import { 
  CodeBracketIcon,
  CommandLineIcon,
  ServerIcon,
  CircleStackIcon,
  PaintBrushIcon,
  CogIcon
} from '@heroicons/vue/24/outline'

const store = usePortfolioStore()

// 기술 아이콘 매핑
const getSkillIcon = (iconName) => {
  const icons = {
    vue: CodeBracketIcon,
    react: CodeBracketIcon,
    javascript: CodeBracketIcon,
    typescript: CodeBracketIcon,
    tailwind: PaintBrushIcon,
    html: CodeBracketIcon,
    nodejs: ServerIcon,
    python: CommandLineIcon,
    mysql: CircleStackIcon,
    git: CogIcon,
    figma: PaintBrushIcon
  }
  return icons[iconName] || CodeBracketIcon
}

// Skills 섹션 전용 애니메이션 설정
const setupSkillsAnimations = () => {
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
  const animateElements = document.querySelectorAll('.skills-title, .skills-subtitle, .skill-category, .category-title, .skill-card, .skill-icon, .skill-level, .skill-progress, .level-labels, .skills-info, .info-title, .info-description, .info-tags')
  animateElements.forEach(el => observer.observe(el))
}

onMounted(async () => {
  await nextTick()
  setupSkillsAnimations()
})
</script>

<style scoped>
/* Skills 섹션 전용 애니메이션 */
.skills-title {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
  will-change: transform, opacity;
}

.skills-title.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.skills-subtitle {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease;
  will-change: transform, opacity;
}

.skills-subtitle.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.skill-category {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
  will-change: transform, opacity;
}

.skill-category.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.category-title {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
  will-change: transform, opacity;
}

.category-title.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.skill-card {
  opacity: 0;
  transform: translateY(30px) scale(0.9);
  transition: all 0.6s ease;
  will-change: transform, opacity;
}

.skill-card.animate-in {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.skill-icon {
  opacity: 0;
  transform: scale(0.5) rotate(180deg);
  transition: all 0.6s ease;
  will-change: transform, opacity;
}

.skill-card.animate-in .skill-icon {
  opacity: 1;
  transform: scale(1) rotate(0deg);
}

.skill-level {
  opacity: 0;
  transform: translateX(20px);
  transition: all 0.6s ease;
  will-change: transform, opacity;
}

.skill-card.animate-in .skill-level {
  opacity: 1;
  transform: translateX(0);
}

.skill-progress {
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 1s ease 0.3s;
}

.skill-card.animate-in .skill-progress {
  transform: scaleX(1);
}

.level-labels {
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.6s ease;
  will-change: transform, opacity;
}

.skill-card.animate-in .level-labels {
  opacity: 1;
  transform: translateY(0);
}

.skills-info {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
  will-change: transform, opacity;
}

.skills-info.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.info-title {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
  will-change: transform, opacity;
}

.skills-info.animate-in .info-title {
  opacity: 1;
  transform: translateY(0);
}

.info-description {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
  will-change: transform, opacity;
}

.skills-info.animate-in .info-description {
  opacity: 1;
  transform: translateY(0);
}

.info-tags {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
  will-change: transform, opacity;
}

.skills-info.animate-in .info-tags {
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
  .skill-card {
    transform: translateY(20px) scale(0.95);
  }
  
  .skills-info {
    transform: translateY(20px);
  }
}
</style>
