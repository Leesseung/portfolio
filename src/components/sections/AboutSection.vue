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
                    :src="profileImage" 
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

    <!-- 새로운 소개 섹션 -->
    <div class="mt-24">
      <div class="text-center mb-16">
        <h3 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 about-title animate-on-scroll">
          저를 더 자세히 알아보세요
        </h3>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto about-subtitle animate-on-scroll">
          다양한 경험을 통해 기른 협업 능력과 적응력, 그리고 저의 인성과 태도에 대해 소개합니다.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- 좌측: 소개 텍스트 -->
        <div class="about-content animate-on-scroll" data-delay="0.2">
          <div class="relative">
            <!-- 화살표 버튼들 -->
            <div class="flex justify-between items-center mb-6">
              <button 
                @click="prevCard"
                class="bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              
              <div class="flex space-x-2">
                <div 
                  v-for="(card, index) in textCards" 
                  :key="index"
                  :class="['w-3 h-3 rounded-full transition-all duration-300', currentCardIndex === index ? 'bg-primary-600' : 'bg-gray-300 dark:bg-gray-600']"
                ></div>
              </div>
              
              <button 
                @click="nextCard"
                class="bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
            
            <!-- 텍스트 카드 -->
            <div class="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-xl min-h-[400px] transition-all duration-500">
              <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {{ textCards[currentCardIndex].title }}
              </h4>
              <div v-html="textCards[currentCardIndex].content" class="text-gray-600 dark:text-gray-400 leading-relaxed"></div>
            </div>
          </div>
        </div>

        <!-- 우측: 이미지 갤러리 -->
        <div class="about-gallery animate-on-scroll" data-delay="0.4">
          <div class="max-h-[800px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-gray-100 dark:scrollbar-track-gray-800">
            <div class="space-y-4 flex flex-col items-center">
              <img :src="galleryImages['IMG_0068.JPG']" alt="팀 프로젝트 활동" class="w-1/2 rounded-2xl shadow-xl" />
              <img :src="galleryImages['IMG_0067.JPG']" alt="협업 활동" class="w-1/2 rounded-2xl shadow-xl" />
              <img :src="galleryImages['IMG_9308.JPG']" alt="학습 활동" class="w-1/2 rounded-2xl shadow-xl" />
              <img :src="galleryImages['IMG_7057.JPG']" alt="팀워크 활동" class="w-1/2 rounded-2xl shadow-xl" />
              <img :src="galleryImages['IMG_6738.JPG']" alt="프로젝트 활동" class="w-1/2 rounded-2xl shadow-xl" />
              <img :src="galleryImages['IMG_5473.JPG']" alt="개발 활동" class="w-1/2 rounded-2xl shadow-xl" />
              <img :src="galleryImages['IMG_4246.JPG']" alt="학습 모습" class="w-1/2 rounded-2xl shadow-xl" />
              <img :src="galleryImages['IMG_3655.JPG']" alt="팀 활동" class="w-1/2 rounded-2xl shadow-xl" />
              <img :src="galleryImages['IMG_0453.JPG']" alt="협업 모습" class="w-1/2 rounded-2xl shadow-xl" />
              <img :src="galleryImages['IMG_0257.JPG']" alt="프로젝트 완료" class="w-1/2 rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, nextTick, ref } from 'vue'
import { usePortfolioStore } from '@/stores/portfolio'
import { profileImage, galleryImages } from '@/utils/images'
import { MapPinIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'

const store = usePortfolioStore()

// 텍스트 카드 슬라이더
const currentCardIndex = ref(0)
const textCards = ref([
  {
    title: '협업과 적응력',
    content: `
      <p class="mb-4">
        다양한 경험을 통해 저는 어디서든 잘 어울리고 누구와도 좋은 관계를 맺을 수 있는 협업 능력과 적응력을 기를 수 있었습니다.
      </p>
      <p class="mb-4">
        호남대학교에서의 팀 프로젝트, KT&G 마케팅 스쿨에서의 대규모 협업, 세계시민성 프로그램에서의 국제적 팀워크, 베트남 해외 교육 봉사에서의 다문화 환경 적응 등 다양한 상황에서 팀원들과 원활하게 소통하고 협력할 수 있었습니다.
      </p>
      <p>
        특히 SSAFY에서의 팀 프로젝트를 통해 개발자로서의 협업 능력을 더욱 향상시킬 수 있었고, 서로 다른 배경과 관점을 가진 팀원들과 함께 목표를 달성하는 과정에서 진정한 팀워크의 가치를 배웠습니다.
      </p>
    `
  },
  {
    title: '학습 태도와 업무 태도',
    content: `
      <p class="mb-4">
        저는 끊임없는 학습과 성장을 추구하는 개발자입니다. 새로운 기술을 배우는 것을 즐기며, 항상 최신 트렌드를 파악하고 적용하려고 노력합니다.
      </p>
      <p class="mb-4">
        업무에서는 책임감과 꼼꼼함을 바탕으로 일하며, 사용자 중심의 사고로 최고의 결과물을 만들어내는 것을 목표로 합니다. 문제가 발생했을 때는 적극적으로 해결책을 찾고, 팀원들과 함께 성장하는 것을 중요하게 생각합니다.
      </p>
      <p>
        또한 피드백을 받고 성장하는 것을 매우 중요하게 생각하여, 항상 개선할 점을 찾고 더 나은 개발자가 되기 위해 노력하고 있습니다.
      </p>
    `
  },
  {
    title: '인성과 가치관',
    content: `
      <p class="mb-4">
        저는 정직하고 신뢰할 수 있는 사람이 되고자 노력합니다. 약속을 지키고, 팀원들과의 약속도 소중하게 여깁니다.
      </p>
      <p class="mb-4">
        베트남 해외 교육 봉사 경험을 통해 다른 사람을 돕는 것의 가치를 깊이 이해하게 되었고, 개발자로서도 사용자에게 도움이 되는 서비스를 만드는 것이 가장 중요하다고 생각합니다.
      </p>
      <p>
        긍정적인 마인드로 어려운 상황에서도 해결책을 찾아내며, 팀원들에게 긍정적인 에너지를 전달할 수 있는 개발자가 되고 싶습니다.
      </p>
    `
  }
])

// 카드 슬라이더 함수들
const nextCard = () => {
  currentCardIndex.value = (currentCardIndex.value + 1) % textCards.value.length
}

const prevCard = () => {
  currentCardIndex.value = currentCardIndex.value === 0 ? textCards.value.length - 1 : currentCardIndex.value - 1
}

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
  const animateElements = document.querySelectorAll('.about-title, .about-subtitle, .about-image, .about-content, .about-intro, .about-skills, .about-buttons, .profile-image, .profile-info, .profile-details, .floating-card, .skill-card, .about-gallery')
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

/* 새로운 소개 섹션 애니메이션 */
.about-gallery {
  opacity: 0;
  transform: translateX(50px);
  transition: all 1s ease;
  will-change: transform, opacity;
}

.about-gallery.animate-in {
  opacity: 1;
  transform: translateX(0);
}

/* 스크롤바 스타일링 */
.scrollbar-thin {
  scrollbar-width: thin;
}

.scrollbar-thin::-webkit-scrollbar {
  width: 6px;
}

.scrollbar-thumb-gray-300::-webkit-scrollbar-thumb {
  background-color: #d1d5db;
  border-radius: 3px;
}

.dark .scrollbar-thumb-gray-600::-webkit-scrollbar-thumb {
  background-color: #4b5563;
}

.scrollbar-track-gray-100::-webkit-scrollbar-track {
  background-color: #f3f4f6;
}

.dark .scrollbar-track-gray-800::-webkit-scrollbar-track {
  background-color: #1f2937;
}

/* 이미지 크기 조정 */
.w-3\/10 {
  width: 30%;
}

.w-3\/5 {
  width: 60%;
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
