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
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { usePortfolioStore } from '@/stores/portfolio'
import { projectImages } from '@/utils/images'
import { 
  ArrowLeftIcon, 
  CodeBracketIcon, 
  ArrowTopRightOnSquareIcon,
  FolderIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/vue/24/outline'

const route = useRoute()
const store = usePortfolioStore()

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
