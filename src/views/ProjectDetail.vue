<template>
  <div class="pt-16">
    <section class="section-padding bg-white dark:bg-dark-900">
      <div class="container-custom">
        <div v-if="project" class="max-w-4xl mx-auto">
          <!-- 뒤로가기 버튼 -->
          <div class="mb-8">
            <router-link 
              to="/projects" 
              class="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
            >
              <ArrowLeftIcon class="w-5 h-5" />
              <span>프로젝트 목록으로 돌아가기</span>
            </router-link>
          </div>

          <!-- 프로젝트 헤더 -->
          <div class="mb-12">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {{ project.title }}
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-400 mb-6">
              {{ project.description }}
            </p>
            
            <!-- 기술 스택 -->
            <div class="flex flex-wrap gap-3 mb-8">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="px-4 py-2 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
              >
                {{ tech }}
              </span>
            </div>
            
            <!-- 링크 버튼들 -->
            <div class="flex flex-col sm:flex-row gap-4">
              <a 
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-secondary text-center"
              >
                <CodeBracketIcon class="w-5 h-5 inline mr-2" />
                GitHub 보기
              </a>
              <a 
                v-if="project.live"
                :href="project.live"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-primary text-center"
              >
                <ArrowTopRightOnSquareIcon class="w-5 h-5 inline mr-2" />
                Live Demo 보기
              </a>
            </div>
          </div>

          <!-- 프로젝트 이미지 -->
          <div class="mb-12">
            <div class="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 shadow-2xl">
              <div class="bg-white dark:bg-dark-800 rounded-xl p-8 text-center">
                <img 
                  v-if="project.image" 
                  :src="projectImages[project.image] || project.image" 
                  :alt="project.title"
                  class="w-full h-64 object-cover rounded-lg mb-6 mx-auto"
                  @error="handleImageError"
                />
                <div v-else>
                  <FolderIcon class="w-24 h-24 text-primary-600 dark:text-primary-400 mx-auto mb-6" />
                  <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {{ project.title }}
                  </h3>
                  <p class="text-gray-600 dark:text-gray-400 text-lg">
                    프로젝트 스크린샷이나 데모 이미지가 여기에 표시됩니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

                     <!-- 프로젝트 상세 정보 -->
           <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
             <!-- 프로젝트 개요 -->
             <div class="space-y-8">
               <div v-if="project.details">
                 <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                   프로젝트 정보
                 </h2>
                 <div class="space-y-4">
                   <div class="bg-gray-50 dark:bg-dark-800 rounded-lg p-4">
                     <h3 class="font-semibold text-gray-900 dark:text-white mb-2">개발 기간</h3>
                     <p class="text-gray-600 dark:text-gray-400">{{ project.details.period }}</p>
                   </div>
                   <div class="bg-gray-50 dark:bg-dark-800 rounded-lg p-4">
                     <h3 class="font-semibold text-gray-900 dark:text-white mb-2">팀 구성</h3>
                     <p class="text-gray-600 dark:text-gray-400">{{ project.details.team }}</p>
                   </div>
                   <div class="bg-gray-50 dark:bg-dark-800 rounded-lg p-4">
                     <h3 class="font-semibold text-gray-900 dark:text-white mb-2">담당 역할</h3>
                     <p class="text-gray-600 dark:text-gray-400">{{ project.details.role }}</p>
                   </div>
                 </div>
               </div>

               <div v-if="project.details?.challenges">
                 <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                   기술적 도전과제
                 </h2>
                 <ul class="space-y-3 text-gray-600 dark:text-gray-400">
                   <li 
                     v-for="challenge in project.details.challenges" 
                     :key="challenge"
                     class="flex items-start space-x-3"
                   >
                     <ExclamationTriangleIcon class="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                     <span>{{ challenge }}</span>
                   </li>
                 </ul>
               </div>
             </div>

             <!-- 성과 및 결과 -->
             <div class="space-y-8">
               <div v-if="project.details?.achievements">
                 <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                   주요 성과
                 </h2>
                 <ul class="space-y-3 text-gray-600 dark:text-gray-400">
                   <li 
                     v-for="achievement in project.details.achievements" 
                     :key="achievement"
                     class="flex items-start space-x-3"
                   >
                     <CheckCircleIcon class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                     <span>{{ achievement }}</span>
                   </li>
                 </ul>
               </div>

               <div>
                 <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                   기술 스택
                 </h2>
                 <div class="space-y-4">
                   <div class="bg-gray-50 dark:bg-dark-800 rounded-lg p-4">
                     <h3 class="font-semibold text-gray-900 dark:text-white mb-2">사용 기술</h3>
                     <div class="flex flex-wrap gap-2">
                       <span 
                         v-for="tech in project.technologies" 
                         :key="tech"
                         class="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                       >
                         {{ tech }}
                       </span>
                     </div>
                   </div>
                 </div>
               </div>

               <!-- 문제 해결 과정 버튼 -->
               <div v-if="project.details?.problemSolving" class="relative">
                 <div class="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl p-6 border border-primary-200 dark:border-primary-700">
                   <div class="flex items-center justify-between">
                     <div class="flex-1">
                       <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                         문제 해결 과정
                       </h3>
                       <p class="text-gray-600 dark:text-gray-400 mb-4">
                         개발 과정에서 겪은 어려움과 해결 방법을 확인해보세요
                       </p>
                       <div class="flex items-center space-x-2 text-sm text-primary-600 dark:text-primary-400">
                         <span>{{ project.details.problemSolving.length }}개의 문제 해결 과정</span>
                         <ArrowRightIcon class="w-4 h-4" />
                       </div>
                     </div>
                     <button 
                       @click="showProblemSolving = true"
                       class="ml-6 p-4 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                     >
                       <ArrowRightIcon class="w-6 h-6" />
                     </button>
                   </div>
                 </div>
               </div>

               <div v-if="!project.details">
                 <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                   프로젝트 개요
                 </h2>
                 <div class="space-y-4 text-gray-600 dark:text-gray-400">
                   <p>
                     이 프로젝트는 {{ project.technologies.join(', ') }} 기술을 활용하여 개발되었습니다.
                     사용자 중심의 디자인과 최신 웹 기술을 적용하여 최적의 사용자 경험을 제공합니다.
                   </p>
                   <p>
                     프로젝트의 주요 목표는 효율적이고 확장 가능한 웹 애플리케이션을 구축하는 것이었습니다.
                     이를 위해 모던한 개발 방법론과 최신 기술 스택을 적극적으로 활용했습니다.
                   </p>
                 </div>
               </div>
             </div>
           </div>
                 </div>

         <!-- 프로젝트를 찾을 수 없을 때 -->
         <div v-else class="text-center py-12">
           <FolderIcon class="w-16 h-16 text-gray-400 mx-auto mb-4" />
           <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">프로젝트를 찾을 수 없습니다</h2>
           <p class="text-gray-600 dark:text-gray-400 mb-6">요청하신 프로젝트가 존재하지 않습니다.</p>
           <router-link to="/projects" class="btn-primary">
             프로젝트 목록으로 돌아가기
           </router-link>
         </div>
       </div>
     </section>

     <!-- 문제 해결 과정 페이지 -->
     <div 
       v-if="showProblemSolving && project?.details?.problemSolving"
       class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
       @click.self="showProblemSolving = false"
     >
       <div class="bg-white dark:bg-dark-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
         <!-- 헤더 -->
         <div class="bg-gradient-to-r from-primary-500 to-primary-600 p-6 text-white">
           <div class="flex items-center justify-between">
             <div class="flex items-center space-x-4">
               <button 
                 @click="showProblemSolving = false"
                 class="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors duration-200"
               >
                 <ArrowLeftIcon class="w-6 h-6" />
               </button>
               <div>
                 <h2 class="text-2xl font-bold">{{ project.title }}</h2>
                 <p class="text-primary-100">문제 해결 과정</p>
               </div>
             </div>
             <div class="text-right">
               <span class="text-sm text-primary-100">{{ activeTab + 1 }} / {{ project.details.problemSolving.length }}</span>
             </div>
           </div>
         </div>

         <!-- 콘텐츠 -->
         <div class="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
           <!-- 탭 네비게이션 -->
           <div class="flex flex-wrap gap-2 mb-6">
             <button 
               v-for="(story, index) in project.details.problemSolving" 
               :key="index"
               @click="activeTab = index"
               class="px-4 py-2 rounded-lg font-medium transition-all duration-200"
               :class="activeTab === index 
                 ? 'bg-primary-500 text-white shadow-lg' 
                 : 'bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700'"
             >
               <span class="flex items-center space-x-2">
                 <span class="w-6 h-6 bg-white dark:bg-dark-900 rounded-full flex items-center justify-center text-xs font-bold text-primary-600 dark:text-primary-400">
                   {{ index + 1 }}
                 </span>
                 <span class="hidden sm:inline">{{ story.title }}</span>
                 <span class="sm:hidden">문제 {{ index + 1 }}</span>
               </span>
             </button>
           </div>

           <!-- 탭 콘텐츠 -->
           <div 
             v-for="(story, index) in project.details.problemSolving" 
             :key="index"
             v-show="activeTab === index"
             class="space-y-6"
           >
             <!-- 문제 제목 -->
             <div class="flex items-center space-x-4 mb-6">
               <div class="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                 {{ index + 1 }}
               </div>
               <div>
                 <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                   {{ story.title }}
                 </h3>
                 <p class="text-gray-500 dark:text-gray-400">
                   문제 해결 과정 {{ index + 1 }}
                 </p>
               </div>
             </div>

             <!-- 문제 해결 단계 -->
             <div class="space-y-6">
               <!-- 문제 상황 -->
               <div class="bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-xl p-6 border-l-4 border-red-500">
                 <div class="flex items-center space-x-3 mb-4">
                   <div class="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center">
                     <ExclamationTriangleIcon class="w-5 h-5" />
                   </div>
                   <h4 class="text-xl font-semibold text-red-700 dark:text-red-300">
                     문제 상황
                   </h4>
                 </div>
                 <p class="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                   {{ story.problem }}
                 </p>
               </div>

               <!-- 해결 과정 -->
               <div class="bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-xl p-6 border-l-4 border-yellow-500">
                 <div class="flex items-center space-x-3 mb-4">
                   <div class="w-10 h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center">
                     <WrenchScrewdriverIcon class="w-5 h-5" />
                   </div>
                   <h4 class="text-xl font-semibold text-yellow-700 dark:text-yellow-300">
                     해결 과정
                   </h4>
                 </div>
                 <p class="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                   {{ story.solution }}
                 </p>
               </div>

               <!-- 결과 -->
               <div class="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-6 border-l-4 border-green-500">
                 <div class="flex items-center space-x-3 mb-4">
                   <div class="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center">
                     <CheckCircleIcon class="w-5 h-5" />
                   </div>
                   <h4 class="text-xl font-semibold text-green-700 dark:text-green-300">
                     결과
                   </h4>
                 </div>
                 <p class="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                   {{ story.result }}
                 </p>
               </div>
             </div>
           </div>

           <!-- 네비게이션 버튼 -->
           <div class="flex justify-between items-center mt-8 pt-6 border-t border-gray-200 dark:border-dark-700">
             <button 
               @click="activeTab = Math.max(0, activeTab - 1)"
               :disabled="activeTab === 0"
               class="flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
               :class="activeTab === 0 
                 ? 'bg-gray-100 dark:bg-dark-800 text-gray-400 dark:text-gray-600' 
                 : 'bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 hover:bg-primary-200 dark:hover:bg-primary-900/40'"
             >
               <ArrowLeftIcon class="w-5 h-5" />
               <span>이전</span>
             </button>

             <span class="text-sm text-gray-500 dark:text-gray-400">
               {{ activeTab + 1 }} / {{ project.details.problemSolving.length }}
             </span>

             <button 
               @click="activeTab = Math.min(project.details.problemSolving.length - 1, activeTab + 1)"
               :disabled="activeTab === project.details.problemSolving.length - 1"
               class="flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
               :class="activeTab === project.details.problemSolving.length - 1 
                 ? 'bg-gray-100 dark:bg-dark-800 text-gray-400 dark:text-gray-600' 
                 : 'bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 hover:bg-primary-200 dark:hover:bg-primary-900/40'"
             >
               <span>다음</span>
               <ArrowRightIcon class="w-5 h-5" />
             </button>
           </div>
         </div>
       </div>
     </div>
   </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { usePortfolioStore } from '@/stores/portfolio'
import { projectImages } from '@/utils/images'
import { 
  ArrowLeftIcon, 
  ArrowRightIcon,
  CodeBracketIcon, 
  ArrowTopRightOnSquareIcon,
  FolderIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  WrenchScrewdriverIcon
} from '@heroicons/vue/24/outline'

const route = useRoute()
const store = usePortfolioStore()
const activeTab = ref(0)
const showProblemSolving = ref(false)

const project = computed(() => {
  const projectId = parseInt(route.params.id)
  return store.projects.find(p => p.id === projectId)
})

const handleImageError = (event) => {
  const img = event.target
  const parent = img.parentElement
  
  // 이미지를 숨기고 기본 아이콘 표시
  img.style.display = 'none'
  const iconDiv = parent.querySelector('div')
  if (iconDiv) {
    iconDiv.style.display = 'block'
  }
}


</script>

<style scoped>
/* 탭 버튼 호버 효과 */
.tab-button:hover {
  transform: translateY(-1px);
}

/* 탭 전환 애니메이션 */
.tab-button {
  transition: all 0.2s ease;
}

/* 그라데이션 배경 애니메이션 */
.bg-gradient-to-r {
  background-size: 200% 200%;
  animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* 카드 호버 효과 */
.hover\:-translate-y-1:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

/* 모달 애니메이션 */
.fixed {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* 스크롤바 스타일링 */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: rgba(156, 163, 175, 0.5);
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: rgba(156, 163, 175, 0.7);
}
</style>
