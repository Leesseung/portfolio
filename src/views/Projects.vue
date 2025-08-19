<template>
  <div class="pt-16">
    <section class="section-padding bg-white dark:bg-dark-900">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            All Projects
          </h1>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            다양한 기술을 활용하여 개발한 프로젝트들을 소개합니다.
          </p>
        </div>

        <!-- 프로젝트 필터 -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button
            v-for="category in projectCategories"
            :key="category"
            @click="selectedCategory = category"
            class="px-6 py-2 rounded-full transition-all duration-200"
            :class="selectedCategory === category 
              ? 'bg-primary-600 text-white' 
              : 'bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700'"
          >
            {{ category }}
          </button>
        </div>

        <!-- 프로젝트 그리드 -->
        <div class="overflow-x-auto pb-4 scrollbar-hide">
          <div class="flex space-x-8 min-w-max">
            <div 
              v-for="(project, index) in filteredProjects" 
              :key="project.id"
              class="group card overflow-hidden hover:shadow-2xl transition-all duration-500 w-80 flex-shrink-0"
              :style="{ animationDelay: index * 0.1 + 's' }"
            >
              <!-- 프로젝트 이미지 -->
              <div class="relative h-48 bg-gradient-to-br from-primary-500 to-primary-700 overflow-hidden">
                <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                <div class="absolute inset-0 flex items-center justify-center">
                  <img 
                    v-if="project.image" 
                    :src="project.image" 
                    :alt="project.title"
                    class="w-full h-full object-cover"
                    @error="handleImageError"
                  />
                  <div v-else class="text-center text-white">
                    <FolderIcon class="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <h3 class="text-xl font-bold">{{ project.title }}</h3>
                  </div>
                </div>
                
                <!-- 호버 오버레이 -->
                <div class="absolute inset-0 bg-primary-600/90 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex items-center justify-center">
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
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                  {{ project.title }}
                </h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {{ project.description }}
                </p>
                
                <!-- 기술 스택 태그 -->
                <div class="flex flex-wrap gap-2 mb-4">
                  <span 
                    v-for="tech in project.technologies.slice(0, 3)" 
                    :key="tech"
                    class="px-2 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                  >
                    {{ tech }}
                  </span>
                  <span 
                    v-if="project.technologies.length > 3"
                    class="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 text-xs rounded-full"
                  >
                    +{{ project.technologies.length - 3 }}
                  </span>
                </div>
                
                <!-- 링크 버튼들 -->
                <div class="flex space-x-2">
                   <a 
                    v-if="project.github"
                    :href="project.github"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 btn-secondary text-center text-sm py-2"
                  >
                    <CodeBracketIcon class="w-4 h-4 inline mr-1" />
                    GitHub
                  </a>
                  <a 
                    v-if="project.live"
                    :href="project.live"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 btn-secondary text-center text-sm py-2"
                  >
                    <ArrowTopRightOnSquareIcon class="w-4 h-4 inline mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 프로젝트가 없을 때 -->
        <div v-if="filteredProjects.length === 0" class="text-center py-12">
          <FolderIcon class="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p class="text-gray-600 dark:text-gray-400">해당 카테고리의 프로젝트가 없습니다.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { usePortfolioStore } from '@/stores/portfolio'
import { FolderIcon, CodeBracketIcon, ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'
import { onMounted } from 'vue'

const store = usePortfolioStore()
const selectedCategory = ref('All')

const projectCategories = computed(() => {
  const categories = ['All']
  store.projects.forEach(project => {
    project.technologies.forEach(tech => {
      if (!categories.includes(tech)) {
        categories.push(tech)
      }
    })
  })
  return categories
})

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') {
    return store.projects
  }
  return store.projects.filter(project => 
    project.technologies.includes(selectedCategory.value)
  )
})

const handleImageError = (event) => {
  const img = event.target
  const parent = img.parentElement
  
  // 이미지를 숨기고 기본 아이콘 표시
  img.style.display = 'none'
  const iconDiv = parent.querySelector('.text-center')
  if (iconDiv) {
    iconDiv.style.display = 'block'
  } else {
    // 기본 아이콘이 없으면 생성
    const newIconDiv = document.createElement('div')
    newIconDiv.className = 'text-center text-white'
    newIconDiv.innerHTML = `
      <svg class="w-16 h-16 mx-auto mb-4 opacity-80" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
      <h3 class="text-xl font-bold">${event.target.alt}</h3>
    `
    parent.appendChild(newIconDiv)
  }
}

// 가로 스크롤 설정
const setupHorizontalScroll = () => {
  const scrollContainer = document.querySelector('.overflow-x-auto')
  if (!scrollContainer) return

  scrollContainer.addEventListener('wheel', (e) => {
    e.preventDefault()
    scrollContainer.scrollLeft += e.deltaY
  })
}

onMounted(() => {
  setupHorizontalScroll()
})
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card {
  animation: slideUp 0.6s ease-out forwards;
  opacity: 0;
  transform: translateY(30px);
}

@keyframes slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
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
