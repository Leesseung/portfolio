<template>
  <footer class="bg-white dark:bg-dark-800 border-t border-gray-200 dark:border-dark-700">
    <div class="container-custom section-padding">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- 개발자 정보 -->
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-sm">Lee</span>
            </div>
            <span class="text-xl font-bold text-gray-900 dark:text-white">이승민</span>
          </div>
          <p class="text-gray-600 dark:text-gray-400 text-sm">
            {{ store.developer.bio }}
          </p>
        </div>

        <!-- 빠른 링크 -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">빠른 링크</h3>
          <ul class="space-y-2">
            <li v-for="item in quickLinks" :key="item.path">
              <router-link 
                :to="item.path"
                class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 text-sm"
              >
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- 소셜 링크 -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">소셜</h3>
          <div class="flex space-x-4">
            <a
              v-for="social in store.socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center space-x-2 px-3 py-2 bg-gray-100 dark:bg-dark-700 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors duration-200"
              :title="social.name"
            >
              <component :is="getSocialIcon(social.icon)" class="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <span class="text-xs font-medium text-gray-700 dark:text-gray-300">{{ social.name }}</span>
            </a>
          </div>
        </div>
      </div>

      <!-- 구분선 -->
      <div class="border-t border-gray-200 dark:border-dark-700 mt-8 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p class="text-gray-600 dark:text-gray-400 text-sm">
            © {{ new Date().getFullYear() }} 이승민. 모든 권리 보유.
          </p>
          <div class="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
            <span>Vue 3 + Tailwind CSS로 제작</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { usePortfolioStore } from '@/stores/portfolio'
import { 
  CodeBracketIcon, 
  UserIcon, 
  PhotoIcon, 
  BookOpenIcon 
} from '@heroicons/vue/24/outline'

const store = usePortfolioStore()

const quickLinks = [
  { name: '홈', path: '/' },
  { name: '소개', path: '/about' },
  { name: '기술 스택', path: '/skills' },
  { name: '프로젝트', path: '/projects' },
  { name: '이력', path: '/experience' },
  { name: '연락처', path: '/contact' }
]

const getSocialIcon = (iconName) => {
  const icons = {
    github: CodeBracketIcon,
    velog: BookOpenIcon
  }
  return icons[iconName] || CodeBracketIcon
}
</script>
