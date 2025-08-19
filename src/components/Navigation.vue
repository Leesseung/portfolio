<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark-900/80 backdrop-blur-md border-b border-gray-200 dark:border-dark-700">
    <div class="container-custom">
      <div class="flex items-center justify-between h-16 px-4">
        <!-- 로고 -->
        <router-link to="/" class="flex items-center space-x-2">
          <div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-sm">Lee</span>
          </div>
          <span class="text-xl font-bold text-gray-900 dark:text-white">이승민</span>
        </router-link>

        <!-- 데스크톱 메뉴 -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link 
            v-for="item in menuItems" 
            :key="item.path"
            :to="item.path"
            class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium"
            :class="{ 'text-primary-600 dark:text-primary-400': $route.path === item.path }"
          >
            {{ item.name }}
          </router-link>
        </div>

        <!-- 우측 버튼들 -->
        <div class="flex items-center space-x-4">
          <!-- 다크모드 토글 -->
          <button
            @click="toggleDarkMode"
            class="p-2 rounded-lg bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors duration-200"
            :title="store.isDarkMode ? '라이트 모드로 전환' : '다크 모드로 전환'"
          >
            <SunIcon v-if="store.isDarkMode" class="w-5 h-5 text-yellow-500" />
            <MoonIcon v-else class="w-5 h-5 text-gray-600" />
          </button>

          <!-- 모바일 메뉴 버튼 -->
          <button
            @click="toggleMobileMenu"
            class="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors duration-200"
          >
            <Bars3Icon v-if="!isMobileMenuOpen" class="w-5 h-5 text-gray-600 dark:text-gray-300" />
            <XMarkIcon v-else class="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>

      <!-- 모바일 메뉴 -->
      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="isMobileMenuOpen" class="md:hidden border-t border-gray-200 dark:border-dark-700">
          <div class="px-4 py-4 space-y-2">
            <router-link
              v-for="item in menuItems"
              :key="item.path"
              :to="item.path"
              @click="closeMobileMenu"
              class="block px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors duration-200 font-medium"
              :class="{ 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400': $route.path === item.path }"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { usePortfolioStore } from '@/stores/portfolio'
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const store = usePortfolioStore()
const isMobileMenuOpen = ref(false)

const menuItems = [
  { name: '홈', path: '/' },
  { name: '소개', path: '/about' },
  { name: '기술 스택', path: '/skills' },
  { name: '프로젝트', path: '/projects' },
  { name: '이력', path: '/experience' },
  { name: '연락처', path: '/contact' }
]

const toggleDarkMode = () => {
  store.toggleDarkMode()
  localStorage.setItem('darkMode', store.isDarkMode.toString())
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>
