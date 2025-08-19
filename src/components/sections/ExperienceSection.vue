<template>
  <section id="experience" class="section-padding bg-gray-50 dark:bg-dark-800">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Experience & Timeline
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          지금까지의 이력과 성장 과정을 타임라인으로 소개합니다.
        </p>
      </div>

             <!-- 타임라인 컨테이너 -->
       <div class="timeline-container relative">
         <!-- 중앙 라인 -->
         <div class="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary-200 dark:bg-primary-800 h-full timeline-line"></div>
         
         <!-- 홈페이지용 스크롤 가능한 타임라인 -->
         <div v-if="isHomePage" class="timeline-scroll-container" ref="scrollContainer">
           <div class="timeline-content space-y-12">
            <div 
              v-for="(experience, index) in store.experience" 
              :key="experience.id"
              class="relative timeline-item"
              :class="{ 'animate-slide-in': isVisible[index] }"
              :style="{ animationDelay: index * 0.15 + 's' }"
              ref="timelineItems"
              :data-index="index"
            >
              <!-- 타임라인 포인트 -->
              <div class="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-dark-800 shadow-lg timeline-point"></div>
              
              <!-- 콘텐츠 카드 -->
              <div 
                class="relative w-5/12 timeline-card"
                :class="index % 2 === 0 ? 'ml-0 mr-auto' : 'ml-auto mr-0'"
              >
                                 <div 
                   class="card p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                   @click="handleCardClick(experience)"
                 >
                  <!-- 기간 -->
                  <div class="flex items-center space-x-2 mb-3">
                    <CalendarIcon class="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    <span class="text-sm font-medium text-primary-600 dark:text-primary-400">
                      {{ experience.period }}
                    </span>
                  </div>
                  
                  <!-- 회사명 -->
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {{ experience.company }}
                  </h3>
                  
                  <!-- 직책 -->
                  <h4 class="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-3">
                    {{ experience.position }}
                  </h4>
                  
                  <!-- 설명 -->
                  <p class="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {{ experience.description }}
                  </p>
                  
                  <!-- 기술 스택 -->
                  <div class="flex flex-wrap gap-2 mb-4">
                    <span 
                      v-for="tech in experience.technologies" 
                      :key="tech"
                      class="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm rounded-full transition-all duration-200 hover:bg-primary-200 dark:hover:bg-primary-800"
                    >
                      {{ tech }}
                    </span>
                  </div>
                  
                  <!-- 주요 성과 -->
                  <div v-if="experience.achievements" class="space-y-2">
                    <h5 class="font-semibold text-gray-900 dark:text-white text-sm">주요 성과:</h5>
                    <ul class="space-y-1">
                      <li 
                        v-for="achievement in experience.achievements" 
                        :key="achievement"
                        class="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <CheckCircleIcon class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{{ achievement }}</span>
                      </li>
                    </ul>
                  </div>
                  
                  <!-- 상세보기 버튼 -->
                  <div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button class="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium transition-colors duration-200">
                      상세보기 →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 상세 페이지용 전체 타임라인 -->
        <div v-else class="timeline-full-container">
          <div class="timeline-content space-y-12">
            <div 
              v-for="(experience, index) in store.experience" 
              :key="experience.id"
              class="relative timeline-item"
              :class="{ 'animate-slide-in': isVisible[index] }"
              :style="{ animationDelay: index * 0.15 + 's' }"
              ref="timelineItems"
              :data-index="index"
            >
              <!-- 타임라인 포인트 -->
              <div class="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-dark-800 shadow-lg timeline-point"></div>
              
              <!-- 콘텐츠 카드 -->
              <div 
                class="relative w-5/12 timeline-card"
                :class="index % 2 === 0 ? 'ml-0 mr-auto' : 'ml-auto mr-0'"
              >
                <div 
                  class="card p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  @click="handleCardClick(experience)"
                >
                  <!-- 기간 -->
                  <div class="flex items-center space-x-2 mb-3">
                    <CalendarIcon class="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    <span class="text-sm font-medium text-primary-600 dark:text-primary-400">
                      {{ experience.period }}
                    </span>
                  </div>
                  
                  <!-- 회사명 -->
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {{ experience.company }}
                  </h3>
                  
                  <!-- 직책 -->
                  <h4 class="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-3">
                    {{ experience.position }}
                  </h4>
                  
                  <!-- 설명 -->
                  <p class="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {{ experience.description }}
                  </p>
                  
                  <!-- 기술 스택 -->
                  <div class="flex flex-wrap gap-2 mb-4">
                    <span 
                      v-for="tech in experience.technologies" 
                      :key="tech"
                      class="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm rounded-full transition-all duration-200 hover:bg-primary-200 dark:hover:bg-primary-800"
                    >
                      {{ tech }}
                    </span>
                  </div>
                  
                  <!-- 주요 성과 -->
                  <div v-if="experience.achievements" class="space-y-2">
                    <h5 class="font-semibold text-gray-900 dark:text-white text-sm">주요 성과:</h5>
                    <ul class="space-y-1">
                      <li 
                        v-for="achievement in experience.achievements" 
                        :key="achievement"
                        class="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <CheckCircleIcon class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{{ achievement }}</span>
                      </li>
                    </ul>
                  </div>
                  
                  <!-- 상세보기 버튼 -->
                  <div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button class="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium transition-colors duration-200">
                      상세보기 →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 통계 섹션 -->
      <div class="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div 
          v-for="(stat, index) in stats" 
          :key="stat.label"
          class="text-center animate-bounce-in"
          :style="{ animationDelay: index * 0.1 + 's' }"
        >
          <div class="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
            {{ stat.value }}
          </div>
          <div class="text-gray-600 dark:text-gray-400">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>

            <!-- 모달 -->
        <Transition name="modal">
                     <div 
             v-if="showModal" 
             class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
             @click="closeModal"
           >
            <div 
              class="bg-white dark:bg-dark-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto modal-content"
              @click.stop
            >
          <!-- 모달 헤더 -->
          <div class="p-6 border-b border-gray-200 dark:border-gray-700">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                  {{ selectedExperience?.company }}
                </h3>
                <p class="text-lg text-primary-600 dark:text-primary-400 mt-1">
                  {{ selectedExperience?.position }}
                </p>
              </div>
                             <button 
                 @click="closeModal"
                 class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
               >
                <XMarkIcon class="w-6 h-6" />
              </button>
            </div>
          </div>

                     <!-- 모달 내용 -->
           <div class="p-6 space-y-6">
             <!-- 기간 -->
             <div class="flex items-center space-x-2">
               <CalendarIcon class="w-5 h-5 text-primary-600 dark:text-primary-400" />
               <span class="text-lg font-medium text-primary-600 dark:text-primary-400">
                 {{ selectedExperience?.period }}
               </span>
             </div>

                           <!-- 이미지 -->
              <div v-if="getExperienceImage(selectedExperience?.company)" class="mb-6">
                <img 
                  :src="getExperienceImage(selectedExperience?.company)" 
                  :alt="selectedExperience?.company"
                                     class="w-full h-96 object-cover rounded-lg shadow-lg"
                  @error="handleImageError"
                />
              </div>

             <!-- 설명 -->
             <div>
               <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">활동 내용</h4>
               <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                 {{ selectedExperience?.description }}
               </p>
             </div>

             <!-- 기술 스택 -->
             <div>
               <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">사용 기술</h4>
               <div class="flex flex-wrap gap-2">
                 <span 
                   v-for="tech in selectedExperience?.technologies" 
                   :key="tech"
                   class="px-3 py-2 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                 >
                   {{ tech }}
                 </span>
               </div>
             </div>

                           <!-- 주요 성과 -->
              <div v-if="selectedExperience?.achievements">
                <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">주요 성과</h4>
                <ul class="space-y-3">
                  <li 
                    v-for="achievement in selectedExperience.achievements" 
                    :key="achievement"
                    class="flex items-start space-x-3 text-gray-600 dark:text-gray-400"
                  >
                    <CheckCircleIcon class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span class="leading-relaxed">{{ achievement }}</span>
                  </li>
                </ul>
              </div>

              <!-- 상세 활동 내용 -->
              <div v-if="getDetailedContent(selectedExperience?.company)">
                <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">상세 활동 내용</h4>
                <div class="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                  <div v-html="getDetailedContent(selectedExperience?.company)"></div>
                </div>
              </div>

              <!-- 학습한 점 -->
              <div v-if="getLessonsLearned(selectedExperience?.company)">
                <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">학습한 점</h4>
                <ul class="space-y-3">
                  <li 
                    v-for="lesson in getLessonsLearned(selectedExperience?.company)" 
                    :key="lesson"
                    class="flex items-start space-x-3 text-gray-600 dark:text-gray-400"
                  >
                    <div class="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span class="leading-relaxed">{{ lesson }}</span>
                  </li>
                </ul>
              </div>

              <!-- 프론트엔드 개발에 미친 영향 -->
              <div v-if="getFrontendImpact(selectedExperience?.company)">
                <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">프론트엔드 개발에 미친 영향</h4>
                <div class="bg-primary-50 dark:bg-primary-900/10 p-4 rounded-lg">
                  <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {{ getFrontendImpact(selectedExperience?.company) }}
                  </p>
                </div>
              </div>
           </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted, nextTick } from 'vue'
import { usePortfolioStore } from '@/stores/portfolio'
import { useRoute } from 'vue-router'
import { experienceImages } from '@/utils/images'
import { CalendarIcon, CheckCircleIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const store = usePortfolioStore()
const route = useRoute()

// 홈페이지인지 확인하는 computed 속성
const isHomePage = computed(() => route.path === '/')
const timelineItems = ref([])
const scrollContainer = ref(null)
const isVisible = ref({})
const observer = ref(null)

const stats = computed(() => [
  {
    value: store.experience.length,
    label: '이력 항목'
  },
  {
    value: store.projects.length,
    label: '완료 프로젝트'
  },
  {
    value: store.allSkills.length,
    label: '보유 기술'
  },
  {
    value: '100%',
    label: '학습 의지'
  }
])

// 모달 상태 및 데이터
const showModal = ref(false)
const selectedExperience = ref(null)

const openModal = (experience) => {
  selectedExperience.value = experience
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  selectedExperience.value = null
}

// 클릭 이벤트 핸들러
const handleCardClick = (experience) => {
  openModal(experience)
}

// 이미지 매핑 함수
const getExperienceImage = (company) => {
  return experienceImages[company] || null
}

// 이미지 에러 핸들러
const handleImageError = (event) => {
  event.target.style.display = 'none'
}

// 상세 내용 매핑 함수들
const getDetailedContent = (company) => {
  const detailedContentMap = {
    '호남대학교 전자공학과': `
      <p class="mb-4">전자공학 전공 과정에서 하드웨어와 소프트웨어의 융합 기술을 학습했습니다. 특히 마이크로프로세서, 디지털 회로 설계, C/C++ 프로그래밍 등 핵심 전공 과목을 통해 기술적 기반을 탄탄히 구축했습니다.</p>
      <p class="mb-4">졸업 프로젝트에서는 시각 장애인을 위한 자율주행 지팡이를 개발하여 실제 사용자에게 도움이 되는 기술을 구현하는 경험을 쌓았습니다. 이 프로젝트는 Arduino, 다양한 센서, 모터 제어 시스템을 활용하여 실제 사용 가능한 IoT 기기를 개발하는 것이었습니다.</p>
      <p>특히 시각 장애인 사용자와의 직접적인 인터뷰와 테스트를 통해 사용자 중심 설계의 중요성을 깊이 이해할 수 있었고, 이는 프론트엔드 개발에서도 사용자 경험을 최우선으로 고려하는 사고방식을 기르는 데 큰 도움이 되었습니다.</p>
    `,
    'KT&G 상상 마케팅 스쿨': `
      <p class="mb-4">3개월간의 집중적인 프로그램을 통해 사용자 중심 마케팅 전략 수립 방법, 브랜드 아이덴티티 구축, 그리고 사용자 경험 디자인에 대한 깊이 있는 이해를 얻을 수 있었습니다.</p>
      <p class="mb-4">특히 실제 기업의 마케팅 케이스 스터디와 실습을 통해 이론을 실무에 적용하는 방법을 배웠으며, 사용자 리서치 및 인터뷰 기법을 습득했습니다.</p>
      <p>이 경험은 프론트엔드 개발에서 사용자 인터페이스와 사용자 경험을 설계할 때 매우 유용한 관점을 제공해주었고, 사용자 중심 사고의 중요성을 깊이 이해할 수 있었습니다.</p>
    `,
    '교내 세계시민성 프로그램': `
      <p class="mb-4">6개월간의 프로그램에서 다양한 문화적 배경을 가진 팀원들과 함께 글로벌 이슈에 대한 해결책을 모색하고, 실제 싱가포르 현지에서의 탐방 프로그램을 기획하고 실행하는 경험을 쌓았습니다.</p>
      <p class="mb-4">특히 팀장으로서 팀원들의 의견을 조율하고 프로젝트를 성공적으로 완수하는 과정에서 리더십과 프로젝트 관리 능력을 크게 향상시킬 수 있었습니다.</p>
      <p>이 경험은 프론트엔드 개발에서 팀 프로젝트를 진행할 때 매우 유용한 협업 스킬을 제공해주었고, 다양한 관점을 통합하는 능력을 기를 수 있었습니다.</p>
    `,
    'PAS팀 베트남 해외 교육 봉사': `
      <p class="mb-4">4개월간의 준비 기간과 3주간의 베트남 현지 활동을 통해 대규모 프로젝트의 기획부터 실행까지 전 과정을 경험할 수 있었습니다.</p>
      <p class="mb-4">특히 베트남 현지의 교육 환경과 문화적 특성을 고려한 교육 프로그램을 기획하고, 현지 학생들과의 직접적인 교류를 통해 국제적 시각과 소통 능력을 크게 향상시킬 수 있었습니다.</p>
      <p>이 경험은 프론트엔드 개발에서 글로벌 사용자를 고려한 서비스를 설계할 때 매우 유용한 관점을 제공해주었고, 다문화 환경에서의 소통 및 협업 능력을 향상시킬 수 있었습니다.</p>
    `,
    'Google AI Essentials': `
      <p class="mb-4">Google에서 제공하는 AI Essentials 온라인 교육 과정을 수강하며 최신 AI 기술 트렌드와 머신러닝 기초 지식을 체계적으로 학습하고 있습니다. 이 과정은 AI의 기본 개념부터 실제 응용까지 포괄적으로 다루는 실무 중심의 교육 프로그램입니다.</p>
      <p class="mb-4">특히 AI 기술의 최신 동향과 실제 비즈니스에서의 활용 사례를 통해 이론과 실무를 연결하는 관점을 기를 수 있었습니다. 또한 머신러닝 기초 이론과 실습을 통해 AI 기술의 핵심 원리를 이해하고, 이를 프론트엔드 개발과 융합할 수 있는 가능성을 탐구하고 있습니다.</p>
      <p>이 교육 과정을 통해 AI 기술의 발전 방향을 파악하고, 향후 프론트엔드 개발에서 AI 기능을 통합하는 방법에 대한 인사이트를 얻을 수 있었습니다. 특히 사용자 경험을 향상시키는 AI 기반 기능들을 구현하는 데 필요한 기초 지식을 습득하고 있습니다.</p>
    `,
    'SSAFY': `
      <p class="mb-4">삼성 청년 SW 아카데미(SSAFY)에서 1년간의 집중적인 소프트웨어 개발 교육을 받으며 프론트엔드 개발의 핵심 역량을 체계적으로 습득하고 있습니다. 이 과정은 실제 프로젝트 중심의 실무형 교육으로, 이론과 실습을 균형있게 학습할 수 있는 프로그램입니다.</p>
      <p class="mb-4">특히 Vue.js, React, JavaScript, TypeScript 등 현대적인 프론트엔드 기술 스택을 깊이 있게 학습하고 있으며, 팀 프로젝트를 통해 협업 능력과 프로젝트 관리 능력을 크게 향상시킬 수 있었습니다. 또한 Git, Docker, AWS 등 개발 도구와 클라우드 서비스에 대한 실무 경험도 쌓을 수 있었습니다.</p>
      <p>SSAFY에서의 학습을 통해 프론트엔드 개발자로서 필요한 모든 역량을 체계적으로 기를 수 있었고, 특히 실제 사용자에게 도움이 되는 서비스를 개발하는 경험을 통해 사용자 중심 사고를 더욱 깊이 이해할 수 있었습니다. 이는 향후 프론트엔드 개발자로서 성장하는 데 매우 중요한 기반이 되고 있습니다.</p>
    `,
    'SSAFY (삼성 청년 SW 아카데미)': `
      <p class="mb-4">Samsung SW AI Academy for Young (SSAFY)는 삼성에서 운영하는 1년 과정의 소프트웨어 개발자 양성 부트캠프입니다. 이 과정은 실무 중심의 프로젝트 기반 학습을 통해 실제 개발 역량을 기르는 것이 특징입니다.</p>
      <p class="mb-4">1학기에서는 Vue.js, React, TypeScript, Django, Node.js 등 최신 웹 개발 기술을 학습했으며, 2학기에서는 Spring Boot, Java, AWS, Docker 등 백엔드 및 클라우드 기술을 추가로 학습하고 있습니다.</p>
      <p>특히 팀 프로젝트를 통한 협업 경험과 실제 서비스 개발 과정을 통해 실무에서 필요한 소프트 스킬과 하드 스킬을 동시에 기를 수 있었고, AI/ML 기초 지식도 함께 학습하여 차세대 개발자로서의 역량을 키우고 있습니다.</p>
    `
  }
  return detailedContentMap[company] || null
}

const getLessonsLearned = (company) => {
  const lessonsMap = {
    '호남대학교 전자공학과': [
      '하드웨어와 소프트웨어 융합 기술의 기초 역량 확보',
      '실제 사용자를 위한 기술 개발의 중요성',
      '사용자 중심 설계 사고의 필요성',
      '팀 프로젝트를 통한 협업 및 소통 능력 향상',
      '기술적 문제 해결 능력과 창의적 사고 개발'
    ],
    'KT&G 상상 마케팅 스쿨': [
      '사용자 중심 사고의 중요성과 실무 적용 방법',
      '브랜드 아이덴티티와 사용자 인식의 연관성',
      '사용자 리서치 및 인터뷰 기법 습득',
      '마케팅 전략을 UI/UX 설계에 적용하는 방법',
      '실제 기업 사례를 통한 실무 이해도 향상'
    ],
    '교내 세계시민성 프로그램': [
      '다양한 문화적 배경을 가진 팀원들과의 협업 능력',
      '글로벌 이슈 해결을 위한 창의적 사고 개발',
      '프로젝트 관리 및 리더십 역량 강화',
      '국제적 시각과 글로벌 마인드 개발',
      '다양한 관점을 통합하는 능력 향상'
    ],
    'PAS팀 베트남 해외 교육 봉사': [
      '대규모 팀 협업 및 조율 능력 개발',
      '국제적 시각과 글로벌 마인드 개발',
      '다문화 환경에서의 소통 및 협업 능력 향상',
      '교육 프로그램 설계 및 실행 경험 축적',
      '문화적 차이를 고려한 서비스 설계의 중요성'
    ],
    'Google AI Essentials': [
      'AI 기술의 최신 트렌드와 발전 방향 파악',
      '머신러닝 기초 이론 및 실습 경험',
      'AI 기술의 비즈니스 활용 사례 학습',
      '프론트엔드 개발과 AI 기술 융합 가능성 탐구',
      '사용자 경험 향상을 위한 AI 기반 기능 구현 방법'
    ],
    'SSAFY': [
      '현대적인 프론트엔드 기술 스택 체계적 학습',
      '실제 프로젝트 중심의 실무형 개발 경험',
      '팀 협업 및 프로젝트 관리 능력 향상',
      '개발 도구 및 클라우드 서비스 실무 경험',
      '사용자 중심 사고와 서비스 개발 역량 강화'
    ],
    'SSAFY (삼성 청년 SW 아카데미)': [
      '현대적인 프론트엔드 기술 스택 체계적 학습',
      '실제 프로젝트 중심의 실무형 개발 경험',
      '팀 협업 및 프로젝트 관리 능력 향상',
      '개발 도구 및 클라우드 서비스 실무 경험',
      '사용자 중심 사고와 서비스 개발 역량 강화'
    ]
  }
  return lessonsMap[company] || null
}

const getFrontendImpact = (company) => {
  const impactMap = {
    '호남대학교 전자공학과': '전자공학 전공 과정에서 습득한 하드웨어-소프트웨어 융합 사고는 프론트엔드 개발에서도 매우 유용합니다. 특히 사용자 중심 설계 경험은 UI/UX 설계 시 사용자 경험을 최우선으로 고려하는 사고방식을 기르는 데 큰 도움이 되었습니다. 또한 IoT 프로젝트에서의 실제 사용자 테스트 경험은 프론트엔드 개발에서도 사용자 피드백의 중요성을 깊이 이해하는 데 기여했습니다.',
    'KT&G 상상 마케팅 스쿨': '마케팅 스쿨에서 학습한 사용자 중심 사고와 브랜딩 전략은 프론트엔드 개발에 직접적으로 적용됩니다. 사용자 리서치 기법은 UI/UX 설계 시 사용자 니즈를 파악하는 데 유용하며, 브랜드 아이덴티티에 대한 이해는 일관된 디자인 시스템을 구축하는 데 도움이 됩니다. 또한 실제 기업 사례를 통한 실무 이해는 비즈니스 요구사항을 기술적 솔루션으로 변환하는 능력을 향상시켰습니다.',
    '교내 세계시민성 프로그램': '세계시민성 프로그램에서 개발한 글로벌 마인드와 협업 능력은 프론트엔드 개발에서 매우 중요한 역량입니다. 다양한 문화적 배경을 가진 팀원들과의 협업 경험은 글로벌 팀에서의 개발 작업에 유용하며, 프로젝트 관리 능력은 복잡한 프론트엔드 프로젝트를 성공적으로 완수하는 데 도움이 됩니다. 또한 국제적 시각은 글로벌 사용자를 고려한 서비스 설계에 기여합니다.',
    'PAS팀 베트남 해외 교육 봉사': '베트남 해외 교육 봉사 경험은 프론트엔드 개발에서 글로벌 사용자를 고려한 서비스 설계에 매우 유용합니다. 다문화 환경에서의 소통 능력은 국제적인 개발 팀에서의 협업에 도움이 되며, 문화적 차이를 고려한 교육 프로그램 설계 경험은 다양한 사용자 그룹을 대상으로 하는 웹 서비스 개발에 적용할 수 있습니다. 또한 대규모 팀 협업 경험은 복잡한 프론트엔드 프로젝트 관리에 유용합니다.',
    'Google AI Essentials': 'Google AI Essentials 교육 과정을 통해 습득한 AI 기술 지식은 프론트엔드 개발의 미래를 준비하는 데 매우 중요한 역량입니다. AI 기술의 최신 트렌드를 파악함으로써 향후 AI 기반 웹 애플리케이션 개발에 필요한 기초를 마련할 수 있었습니다. 특히 머신러닝 기초 이론과 실습 경험은 프론트엔드에서 AI 기능을 통합하는 방법을 이해하는 데 도움이 되며, 사용자 경험을 향상시키는 AI 기반 기능들을 구현할 수 있는 역량을 기를 수 있었습니다. 이는 차세대 웹 개발에서 필수적인 AI 융합 기술을 습득하는 중요한 경험이었습니다.',
    'SSAFY': 'SSAFY에서의 체계적인 교육은 프론트엔드 개발자로서의 핵심 역량을 구축하는 데 매우 중요한 경험이었습니다. Vue.js, React, JavaScript, TypeScript 등 현대적인 프론트엔드 기술 스택을 깊이 있게 학습함으로써 실무에서 즉시 활용할 수 있는 기술적 기반을 탄탄히 마련할 수 있었습니다. 특히 실제 프로젝트 중심의 교육을 통해 이론과 실무를 연결하는 능력을 크게 향상시킬 수 있었고, 팀 협업 경험을 통해 프론트엔드 개발자로서 필요한 소통 및 협업 능력을 기를 수 있었습니다. 또한 Git, Docker, AWS 등 개발 도구와 클라우드 서비스에 대한 실무 경험은 현대적인 개발 환경에서 필수적인 역량을 제공해주었습니다. 이는 프론트엔드 개발자로서 성공적인 커리어를 시작하는 데 매우 중요한 기반이 되고 있습니다.',
    'SSAFY (삼성 청년 SW 아카데미)': 'Samsung SW AI Academy for Young (SSAFY)에서의 체계적인 교육은 프론트엔드 개발자로서의 핵심 역량을 구축하는 데 매우 중요한 경험이었습니다. Vue.js, React, TypeScript, Django, Node.js 등 최신 웹 개발 기술을 깊이 있게 학습함으로써 실무에서 즉시 활용할 수 있는 기술적 기반을 탄탄히 마련할 수 있었습니다. 특히 실제 프로젝트 중심의 교육을 통해 이론과 실무를 연결하는 능력을 크게 향상시킬 수 있었고, 팀 협업 경험을 통해 프론트엔드 개발자로서 필요한 소통 및 협업 능력을 기를 수 있었습니다. 또한 Spring Boot, Java, AWS, Docker 등 백엔드 및 클라우드 기술에 대한 실무 경험은 풀스택 개발자로서의 역량을 제공해주었습니다. AI/ML 기초 지식도 함께 학습하여 차세대 개발자로서의 역량을 키울 수 있었습니다. 이는 프론트엔드 개발자로서 성공적인 커리어를 시작하는 데 매우 중요한 기반이 되고 있습니다.'
  }
  return impactMap[company] || null
}

// 최적화된 Intersection Observer 설정
const setupObserver = () => {
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const index = parseInt(entry.target.dataset.index)
      
      // 한 번 보인 요소는 계속 보이도록 유지
      if (entry.isIntersecting && !isVisible.value[index]) {
        isVisible.value[index] = true
      }
    })
  }, {
    threshold: 0.2, // 더 낮은 임계값으로 조정
    rootMargin: '0px 0px -20px 0px', // 더 작은 마진
    root: scrollContainer.value // 스크롤 컨테이너를 root로 설정
  })

  // 타임라인 아이템들을 관찰
  timelineItems.value.forEach((item, index) => {
    if (item && observer.value) {
      observer.value.observe(item)
    }
  })
}

onMounted(async () => {
  // DOM이 완전히 렌더링된 후 observer 설정
  await nextTick()
  // 홈페이지에서만 observer 설정
  if (isHomePage.value) {
    setupObserver()
  }
})

onUnmounted(() => {
  if (observer.value) {
    observer.value.disconnect()
  }
})
</script>

<style scoped>
/* 타임라인 컨테이너 스타일 */
.timeline-container {
  position: relative;
  min-height: 600px;
}

.timeline-scroll-container {
  max-height: 70vh;
  overflow-y: auto;
  scroll-behavior: smooth;
  padding: 2rem 0;
  /* 스크롤 성능 최적화 */
  will-change: scroll-position;
  -webkit-overflow-scrolling: touch;
}

.timeline-full-container {
  padding: 2rem 0;
  /* 전체 타임라인은 스크롤 없이 전체 표시 */
}

.timeline-scroll-container::-webkit-scrollbar {
  width: 8px;
}

.timeline-scroll-container::-webkit-scrollbar-track {
  background: rgba(156, 163, 175, 0.1);
  border-radius: 4px;
}

.timeline-scroll-container::-webkit-scrollbar-thumb {
  background: rgba(59, 130, 246, 0.3);
  border-radius: 4px;
  transition: background 0.3s ease;
}

.timeline-scroll-container::-webkit-scrollbar-thumb:hover {
  background: rgba(59, 130, 246, 0.5);
}

.timeline-content {
  position: relative;
  padding: 0 2rem;
}

.timeline-line {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
}

.timeline-point {
  z-index: 2;
  transition: all 0.3s ease;
}

.timeline-item:hover .timeline-point {
  transform: translate(-50%, -50%) scale(1.2);
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
}

.timeline-card {
  z-index: 3;
  transition: all 0.3s ease;
}

/* 최적화된 애니메이션 */
.animate-slide-in {
  animation: slideIn 0.6s ease-out forwards;
  opacity: 0;
  transform: translateX(-30px);
  /* 애니메이션 성능 최적화 */
  will-change: transform, opacity;
}

.animate-slide-in:nth-child(even) {
  transform: translateX(30px);
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-bounce-in {
  animation: bounceIn 0.6s ease-out forwards;
  opacity: 0;
}

@keyframes bounceIn {
  0% {
    transform: scale(0.3);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* 호버 효과 */
.timeline-item:hover .timeline-card {
  transform: translateY(-5px);
}

/* 반응형 타임라인 */
@media (max-width: 768px) {
  .timeline-scroll-container {
    max-height: 60vh;
  }
  
  .timeline-content {
    padding: 0 1rem;
  }
  
  .timeline-card {
    width: 100% !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding-left: 2rem;
  }
  
  .timeline-line {
    left: 1rem !important;
    transform: none !important;
  }
  
  .timeline-point {
    left: 1rem !important;
    transform: translateY(-50%) !important;
  }
}

/* 다크모드 스크롤바 */
.dark .timeline-scroll-container::-webkit-scrollbar-track {
  background: rgba(75, 85, 99, 0.1);
}

.dark .timeline-scroll-container::-webkit-scrollbar-thumb {
  background: rgba(59, 130, 246, 0.4);
}

.dark .timeline-scroll-container::-webkit-scrollbar-thumb:hover {
  background: rgba(59, 130, 246, 0.6);
}

/* 성능 최적화 */
.timeline-item {
  /* GPU 가속 활성화 */
  transform: translateZ(0);
  backface-visibility: hidden;
}

.card {
  /* 카드 렌더링 최적화 */
  transform: translateZ(0);
  backface-visibility: hidden;
}

/* 모달 애니메이션 */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.2s ease;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: all 0.2s ease;
}

.modal-enter-from .modal-content {
  transform: scale(0.95) translateY(-10px);
  opacity: 0;
}

.modal-leave-to .modal-content {
  transform: scale(0.95) translateY(-10px);
  opacity: 0;
}
</style>
