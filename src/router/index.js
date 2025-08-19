import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Skills from '@/views/Skills.vue'
import Projects from '@/views/Projects.vue'
import ProjectDetail from '@/views/ProjectDetail.vue'
import Experience from '@/views/Experience.vue'
import Contact from '@/views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: '홈' }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { title: '소개' }
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills,
    meta: { title: '기술 스택' }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    meta: { title: '프로젝트' }
  },
  {
    path: '/projects/:id',
    name: 'ProjectDetail',
    component: ProjectDetail,
    meta: { title: '프로젝트 상세' }
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience,
    meta: { title: '이력' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: { title: '연락처' }
  }
]

const router = createRouter({
  history: createWebHistory('/portfolio/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// 페이지 제목 설정
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - 개발자 포트폴리오`
  next()
})

export default router
