<template>
  <section id="contact" class="section-padding bg-white dark:bg-dark-900">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 contact-title animate-on-scroll">
          피드백 보내기
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto contact-subtitle animate-on-scroll">
          저에게 당신의 회사에 입사하기에 부족하다 느끼는 부분을 피드백 해주세요. 피드백을 받고 성장하겠습니다.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- 연락처 정보 -->
        <div class="space-y-8 contact-info animate-on-scroll">
          <div class="contact-details animate-on-scroll" data-delay="0.2">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              연락처 정보
            </h3>
            <div class="space-y-6">
              <div class="flex items-center space-x-4 contact-item animate-on-scroll" data-delay="0.3">
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center contact-icon animate-on-scroll">
                  <EnvelopeIcon class="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div class="contact-text animate-on-scroll">
                  <h4 class="font-semibold text-gray-900 dark:text-white">이메일</h4>
                  <a 
                    :href="`mailto:${store.developer.email}`"
                    class="text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    {{ store.developer.email }}
                  </a>
                </div>
              </div>
              
              <div class="flex items-center space-x-4 contact-item animate-on-scroll" data-delay="0.4">
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center contact-icon animate-on-scroll">
                  <MapPinIcon class="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div class="contact-text animate-on-scroll">
                  <h4 class="font-semibold text-gray-900 dark:text-white">위치</h4>
                  <p class="text-gray-600 dark:text-gray-400">{{ store.developer.location }}</p>
                </div>
              </div>
              
              <div class="flex items-center space-x-4 contact-item animate-on-scroll" data-delay="0.5">
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center contact-icon animate-on-scroll">
                  <ClockIcon class="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div class="contact-text animate-on-scroll">
                  <h4 class="font-semibold text-gray-900 dark:text-white">응답 시간</h4>
                  <p class="text-gray-600 dark:text-gray-400">24시간 이내</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 소셜 링크 -->
          <div class="social-links animate-on-scroll" data-delay="0.6">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              소셜 미디어
            </h3>
            <div class="flex space-x-4">
              <a
                v-for="social in store.socialLinks"
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center space-x-2 px-4 py-3 bg-gray-100 dark:bg-dark-800 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-all duration-300 hover:scale-105 social-link animate-on-scroll hover-lift"
                :title="social.name"
              >
                <component :is="getSocialIcon(social.icon)" class="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ social.name }}</span>
              </a>
            </div>
          </div>
        </div>

        <!-- 연락처 폼 -->
        <div class="card p-8 contact-form animate-on-scroll" data-delay="0.3">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 form-title animate-on-scroll">
            피드백 작성
          </h3>
          
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 form-row animate-on-scroll" data-delay="0.4">
              <div class="form-field animate-on-scroll">
                <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  회사명 (선택사항)
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  class="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-white"
                  placeholder="회사명을 입력하세요 (익명 가능)"
                />
              </div>
              
              <div class="form-field animate-on-scroll">
                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  이메일 (선택사항)
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  class="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-white"
                  placeholder="이메일을 입력하세요 (익명 가능)"
                />
              </div>
            </div>
            
            <div class="form-field animate-on-scroll" data-delay="0.5">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                어떤 부분에 대한 피드백인가요? *
              </label>
              <div class="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  @click="form.subject = '기술적 역량'"
                  :class="[
                    'px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 transform hover:scale-105 shadow-sm',
                    form.subject === '기술적 역량'
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30'
                      : 'bg-gradient-to-r from-gray-50 to-gray-100 dark:from-dark-700 dark:to-dark-800 text-gray-700 dark:text-gray-300 hover:from-gray-100 hover:to-gray-200 dark:hover:from-dark-600 dark:hover:to-dark-700 border border-gray-200 dark:border-dark-600'
                  ]"
                >
                  기술적 역량
                </button>
                <button
                  type="button"
                  @click="form.subject = '프로젝트 경험'"
                  :class="[
                    'px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 transform hover:scale-105 shadow-sm',
                    form.subject === '프로젝트 경험'
                      ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/30'
                      : 'bg-gradient-to-r from-gray-50 to-gray-100 dark:from-dark-700 dark:to-dark-800 text-gray-700 dark:text-gray-300 hover:from-gray-100 hover:to-gray-200 dark:hover:from-dark-600 dark:hover:to-dark-700 border border-gray-200 dark:border-dark-600'
                  ]"
                >
                  프로젝트 경험
                </button>
                <button
                  type="button"
                  @click="form.subject = '커뮤니케이션'"
                  :class="[
                    'px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 transform hover:scale-105 shadow-sm',
                    form.subject === '커뮤니케이션'
                      ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-500/30'
                      : 'bg-gradient-to-r from-gray-50 to-gray-100 dark:from-dark-700 dark:to-dark-800 text-gray-700 dark:text-gray-300 hover:from-gray-100 hover:to-gray-200 dark:hover:from-dark-600 dark:hover:to-dark-700 border border-gray-200 dark:border-dark-600'
                  ]"
                >
                  커뮤니케이션
                </button>
                <button
                  type="button"
                  @click="form.subject = '포트폴리오 구성'"
                  :class="[
                    'px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 transform hover:scale-105 shadow-sm',
                    form.subject === '포트폴리오 구성'
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30'
                      : 'bg-gradient-to-r from-gray-50 to-gray-100 dark:from-dark-700 dark:to-dark-800 text-gray-700 dark:text-gray-300 hover:from-gray-100 hover:to-gray-200 dark:hover:from-dark-600 dark:hover:to-dark-700 border border-gray-200 dark:border-dark-600'
                  ]"
                >
                  포트폴리오 구성
                </button>
                <button
                  type="button"
                  @click="form.subject = '기타'"
                  :class="[
                    'px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 transform hover:scale-105 shadow-sm col-span-2',
                    form.subject === '기타'
                      ? 'bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-lg shadow-gray-600/30'
                      : 'bg-gradient-to-r from-gray-50 to-gray-100 dark:from-dark-700 dark:to-dark-800 text-gray-700 dark:text-gray-300 hover:from-gray-100 hover:to-gray-200 dark:hover:from-dark-600 dark:hover:to-dark-700 border border-gray-200 dark:border-dark-600'
                  ]"
                >
                  기타
                </button>
              </div>
              <input
                v-model="form.subject"
                type="hidden"
                required
              />
            </div>
            
            <div class="form-field animate-on-scroll" data-delay="0.6">
              <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                피드백 내용 *
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="6"
                required
                class="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-white resize-none"
                placeholder="구체적인 피드백을 작성해주세요. 어떤 부분이 부족하다고 생각하시나요?"
              ></textarea>
            </div>
            
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full btn-primary py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed submit-btn animate-on-scroll hover-lift"
              data-delay="0.7"
            >
              <span v-if="isSubmitting">전송 중...</span>
              <span v-else>피드백 보내기</span>
            </button>
          </form>

          <!-- 성공 메시지 -->
          <div v-if="showSuccessMessage" class="mt-4 p-4 bg-green-100 dark:bg-green-900/20 border border-green-400 dark:border-green-600 rounded-lg">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-green-800 dark:text-green-200">
                  피드백이 성공적으로 전송되었습니다! 성장에 도움이 될 것입니다.
                </p>
              </div>
            </div>
          </div>

          <!-- 실패 메시지 -->
          <div v-if="showErrorMessage" class="mt-4 p-4 bg-red-100 dark:bg-red-900/20 border border-red-400 dark:border-red-600 rounded-lg">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-red-800 dark:text-red-200">
                  피드백 전송에 실패했습니다. 다시 시도해주세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { usePortfolioStore } from '@/stores/portfolio'
import emailjs from '@emailjs/browser'
import { 
  EnvelopeIcon, 
  MapPinIcon, 
  ClockIcon,
  CodeBracketIcon,
  UserIcon,
  PhotoIcon,
  BookOpenIcon
} from '@heroicons/vue/24/outline'

const store = usePortfolioStore()
const isSubmitting = ref(false)
const showSuccessMessage = ref(false)
const showErrorMessage = ref(false)

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const getSocialIcon = (iconName) => {
  const icons = {
    github: CodeBracketIcon,
    velog: BookOpenIcon
  }
  return icons[iconName] || CodeBracketIcon
}

const handleSubmit = async () => {
  if (!form.value.subject || !form.value.message) {
    alert('피드백 유형과 내용을 입력해주세요.')
    return
  }

  isSubmitting.value = true
  showSuccessMessage.value = false
  showErrorMessage.value = false
  
  try {
    // EmailJS 설정
    const templateParams = {
      from_company: form.value.name || '익명',
      from_email: form.value.email || '익명',
      feedback_type: form.value.subject,
      message: form.value.message,
      to_name: store.developer.name,
      // 기본 템플릿용 변수 (템플릿 수정 전까지 사용)
      user_name: form.value.name || '익명',
      user_email: form.value.email || '익명',
      subject: form.value.subject,
      message: form.value.message
    }

    // EmailJS 전송 (GitHub Pages용 하드코딩)
    const serviceId = 'service_9reu9ty'
    const templateId = 'template_ghp12uj'
    const publicKey = 'rr59F45zfY2MN5SXp'
    
    // 실제 이메일 전송
    await emailjs.send(serviceId, templateId, templateParams, publicKey)
    
    // 성공 메시지
    showSuccessMessage.value = true
    setTimeout(() => {
      showSuccessMessage.value = false
    }, 5000)
    
    // 폼 초기화
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  } catch (error) {
    console.error('피드백 전송 실패:', error)
    showErrorMessage.value = true
    setTimeout(() => {
      showErrorMessage.value = false
    }, 5000)
  } finally {
    isSubmitting.value = false
  }
}

// Contact 섹션 전용 애니메이션 설정
const setupContactAnimations = () => {
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
  const animateElements = document.querySelectorAll('.contact-title, .contact-subtitle, .contact-info, .contact-details, .contact-item, .contact-icon, .contact-text, .social-links, .social-link, .contact-form, .form-title, .form-row, .form-field, .submit-btn')
  animateElements.forEach(el => observer.observe(el))
}

onMounted(async () => {
  await nextTick()
  setupContactAnimations()
})
</script>

<style scoped>
/* Contact 섹션 전용 애니메이션 */
.contact-title {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
  will-change: transform, opacity;
}

.contact-title.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.contact-subtitle {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease;
  will-change: transform, opacity;
}

.contact-subtitle.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.contact-info {
  opacity: 0;
  transform: translateX(-50px);
  transition: all 1s ease;
  will-change: transform, opacity;
}

.contact-info.animate-in {
  opacity: 1;
  transform: translateX(0);
}

.contact-details {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
  will-change: transform, opacity;
}

.contact-info.animate-in .contact-details {
  opacity: 1;
  transform: translateY(0);
}

.contact-item {
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.6s ease;
  will-change: transform, opacity;
}

.contact-info.animate-in .contact-item {
  opacity: 1;
  transform: translateX(0);
}

.contact-icon {
  opacity: 0;
  transform: scale(0.5) rotate(180deg);
  transition: all 0.6s ease;
  will-change: transform, opacity;
}

.contact-item.animate-in .contact-icon {
  opacity: 1;
  transform: scale(1) rotate(0deg);
}

.contact-text {
  opacity: 0;
  transform: translateX(20px);
  transition: all 0.6s ease;
  will-change: transform, opacity;
}

.contact-item.animate-in .contact-text {
  opacity: 1;
  transform: translateX(0);
}

.social-links {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
  will-change: transform, opacity;
}

.contact-info.animate-in .social-links {
  opacity: 1;
  transform: translateY(0);
}

.social-link {
  opacity: 0;
  transform: scale(0.5);
  transition: all 0.6s ease;
  will-change: transform, opacity;
}

.social-links.animate-in .social-link {
  opacity: 1;
  transform: scale(1);
}

.contact-form {
  opacity: 0;
  transform: translateX(50px);
  transition: all 1s ease;
  will-change: transform, opacity;
}

.contact-form.animate-in {
  opacity: 1;
  transform: translateX(0);
}

.form-title {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
  will-change: transform, opacity;
}

.contact-form.animate-in .form-title {
  opacity: 1;
  transform: translateY(0);
}

.form-row {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
  will-change: transform, opacity;
}

.contact-form.animate-in .form-row {
  opacity: 1;
  transform: translateY(0);
}

.form-field {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
  will-change: transform, opacity;
}

.contact-form.animate-in .form-field {
  opacity: 1;
  transform: translateY(0);
}

.submit-btn {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
  will-change: transform, opacity;
}

.contact-form.animate-in .submit-btn {
  opacity: 1;
  transform: translateY(0);
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
  .contact-info {
    transform: translateY(30px);
  }
  
  .contact-form {
    transform: translateY(30px);
  }
}
</style>
