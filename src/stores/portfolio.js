import { defineStore } from 'pinia'

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    // 다크모드 상태
    isDarkMode: false,
    
    // 개발자 정보
    developer: {
      name: '이승민',
      title: 'Frontend Developer',
      email: 'lsm122500@naver.com',
      location: '광주 광역시 광산구, 대한민국',
      bio: '창의적이고 사용자 중심의 웹 애플리케이션을 개발하는 것을 좋아하는 개발자입니다. 최신 기술 트렌드를 학습하고 적용하는 것에 열정을 가지고 있습니다.',
      avatar: '/avatar.jpg'
    },
    
    // 기술 스택
    skills: [
      {
        category: 'Frontend',
        items: [
          { name: 'Vue.js', level: 85, icon: 'vue' },
          { name: 'React', level: 35, icon: 'react' },
          { name: 'JavaScript', level: 90, icon: 'javascript' },
          { name: 'TypeScript', level: 70, icon: 'typescript' },
          { name: 'Tailwind CSS', level: 75, icon: 'tailwind' },
          { name: 'HTML/CSS', level: 90, icon: 'html' }
        ]
      },
      {
        category: 'Backend',
        items: [
          { name: 'Node.js', level: 70, icon: 'nodejs' },
          { name: 'Python', level: 85, icon: 'python' },
          { name: 'MySQL', level: 60, icon: 'mysql' }
        ]
      },
      {
        category: 'Tools & Others',
        items: [
          { name: 'Git', level: 80, icon: 'git' },
          { name: 'Figma', level: 65, icon: 'figma' }
        ]
      }
    ],
    
    // 프로젝트 목록
    projects: [
      {
        id: 1,
        title: 'EduMeet - AI 기반 교육 플랫폼',
        description: 'LiveKit 기반 실시간 화상 회의와 AI 자막, 음성 녹화 기능을 제공하는 차세대 교육 플랫폼',
        image: '/edumeet.png',
        technologies: ['Vue.js 3', 'LiveKit', 'Web Speech API', 'Pinia', 'Bootstrap 5'],
        github: 'https://github.com/Leesseung/edumeet.git',
        live: 'http://i13c205.p.ssafy.io/',
        featured: true,
        details: {
          period: '2025.06 - 2025.08 (6주)',
          team: 'Frontend 2명, Backend 2명, AI 2명',
          role: 'Frontend 개발 및 UI/UX 설계, Webrtc, web speech api',
          challenges: [
            'LiveKit 기반 실시간 화상 통화 시스템 구축',
            'Web Speech API를 활용한 실시간 자막 시스템 개발',
            '음성 녹화 및 AI 요약 기능 구현',
            '반응형 UI/UX 설계 및 최적화'
          ],
          achievements: [
            '20명 동시 접속 지원하는 안정적인 화상 통화',
            '한국어 85% 이상 정확도의 AI 자막 시스템',
            '5분 청크 단위 음성 녹화 및 AI 요약',
            '모바일/태블릿/데스크톱 완벽 지원하는 반응형 UI'
          ]
        }
      },
      {
        id: 2,
        title: '편리한 금융을 위한 프로젝트',
        description: '예금·적금 상품 비교·추천 플랫폼과 OpenAI 기반 개인화 금융 챗봇 서비스',
        image: '/projects/finance.jpg',
        technologies: ['Vue.js 3', 'Django REST Framework', 'OpenAI GPT-4', 'SQLite/PostgreSQL', 'JWT'],
        github: 'https://github.com/Leesseung/-pjt',
        live: null,
        featured: true,
        details: {
          period: '2025.5 (2주)',
          team: '팀장: 이승민, 팀원: 이세진',
          role: '팀장, Full Stack 개발',
          challenges: [
            '금융 상품 API 연동 및 데이터 처리',
            'OpenAI GPT-4 기반 개인화 챗봇 구현',
            '대댓글 트리 구조의 커뮤니티 시스템 개발',
            'JWT 인증 및 팔로우 시스템 구현'
          ],
          achievements: [
            '예금·적금 상품 비교·추천 기능 완성',
            'OpenAI 기반 개인화 금융 상담 챗봇 구현',
            '대댓글 지원하는 커뮤니티 게시판 시스템',
            '사용자 인증 및 프로필 관리 시스템'
          ]
        }
      },
      {
        id: 3,
        title: 'IoT 자율 주행 지팡이',
        description: '시각 장애인을 위한 IoT 기반 자율 주행 지팡이 시스템',
        image: '/ridar.jpg',
        technologies: ['Arduino', 'C++', 'python', '라즈베리파이 4', 'IoT', '센서 기술', '모터 제어'],
        github: null,
        live: null,
        featured: false,
        details: {
          period: '2024.06 - 2024.12 (6개월)',
          team: '팀장: 이승민, 팀원: 김민서, 허윤석',
          role: 'IoT 시스템 설계 및 개발',
          challenges: [
            '다양한 센서를 활용한 장애물 감지 시스템 구현',
            '자율 주행 알고리즘 개발 및 최적화',
            '모터 제어 및 방향 전환 시스템 설계',
            '배터리 효율성 및 안정성 확보'
          ],
          achievements: [
            '초음파 센서 기반 장애물 감지 시스템 완성',
            '자율 주행 알고리즘을 통한 안전한 경로 탐색',
            '시각 장애인 사용자 테스트를 통한 기능 검증',
            '졸업 프로젝트 장려상상 수상'
          ]
        }
      },
      {
        id: 4,
        title: '포트폴리오',
        description: 'Vue.js 3와 Tailwind CSS를 활용한 반응형 개발자 포트폴리오 웹사이트',
        image: '/protfolio.png',
        technologies: ['Vue.js 3', 'Tailwind CSS', 'Pinia', 'Vue Router', 'Vite', 'JavaScript'],
        github: 'https://github.com/Leesseung/portfolio',
        live: 'https://leesseung.github.io/portfolio',
        featured: true,
        details: {
          period: '2025.8 - 현재',
          team: '개인 프로젝트',
          role: '프론트 구현',
          challenges: [
            'Vue.js 3 Composition API를 활용한 모던 프론트엔드 개발',
            'Tailwind CSS를 활용한 반응형 디자인 구현',
            '다크모드 지원 및 사용자 경험 최적화',
            '스크롤 애니메이션 및 인터랙티브 요소 구현'
          ],
          achievements: [
            'Vue.js 3와 Tailwind CSS를 활용한 모던 포트폴리오 완성',
            '반응형 디자인으로 모든 디바이스에서 최적화된 경험 제공',
            '다크모드 지원 및 부드러운 애니메이션 효과 구현',
            'GitHub Pages를 통한 무료 호스팅 및 배포'
          ]
        }
      }
    ],
    
    // 이력 정보
    experience: [
      {
        id: 1,
        company: '호남대학교 전자공학과',
        position: '학부생',
        period: '2019.03 - 2025.02',
        description: '전자공학 전공 과정을 수료하며 하드웨어와 소프트웨어 융합 기술의 기초를 다졌습니다. 마이크로프로세서, 디지털 회로 설계, C/C++ 프로그래밍 등 핵심 전공 과목을 통해 기술적 기반을 구축하고, 졸업 프로젝트로 시각 장애인을 위한 자율주행 지팡이를 개발했습니다.',
        technologies: ['전자공학', 'C/C++', 'Arduino', '하드웨어 설계', '수학/물리', '마이크로프로세서', '디지털 회로'],
        achievements: [
          '전자공학과 졸업으로 기술적 기초 역량 확보',
          '다양한 팀 프로젝트를 통한 협업 경험 축적',
          '하드웨어와 소프트웨어 융합 사고 개발',
          '졸업 작품 수상으로 기술적 역량 인정',
          '실제 사용자를 위한 IoT 프로젝트 완성'
        ]
      },
      {
        id: 2,
        company: '청사진 책 집필',
        position: '집필 참여 (30명 협업)',
        period: '2022.03 - 2022.04 (1개월)',
        description: '30명이 함께 참여하는 청사진 책 집필 프로젝트에 참여하여 대규모 협업과 창의적 사고 능력을 개발했습니다. 미래 기술과 사회 변화에 대한 통찰을 담은 책을 집필하며, 복잡한 주제를 일반 독자들이 이해하기 쉽게 설명하는 능력을 기를 수 있었습니다.',
        technologies: ['창의적 사고', '문서 작성', '대규모 협업', '커뮤니케이션', '기술 문서화', '사용자 중심 사고'],
        achievements: [
          '30명 대규모 팀과의 협업을 통한 책 집필 완성',
          '창의적 아이디어 발굴 및 문서화 능력 개발',
          '다양한 관점을 통합하는 협업 경험',
          '기술적 내용을 일반 독자용으로 재구성하는 능력 향상',
          '사용자 중심 사고와 커뮤니케이션 스킬 개발'
        ]
      },
      {
        id: 3,
        company: 'KT&G 상상 마케팅 스쿨',
        position: '수료생',
        period: '2022.06 - 2022.08',
        description: 'KT&G 상상 마케팅 스쿨을 수료하며 사용자 중심 마케팅 전략과 브랜딩 전략을 학습했습니다. 3개월간의 집중적인 프로그램을 통해 사용자 경험 디자인에 대한 깊이 있는 이해를 얻고, 실제 기업 케이스 스터디를 통해 이론을 실무에 적용하는 방법을 배웠습니다.',
        technologies: ['마케팅 전략', '브랜딩', '사용자 경험', '디자인 사고', '사용자 리서치', 'UI/UX 설계', '브랜드 아이덴티티'],
        achievements: [
          '사용자 중심 마케팅 전략 수립 방법 학습',
          '브랜드 아이덴티티와 사용자 인식의 중요성 이해',
          '프론트엔드 개발에 필요한 사용자 경험 관점 습득',
          '실제 기업 케이스 스터디를 통한 실무 적용 능력 향상',
          '사용자 리서치 및 인터뷰 기법 습득'
        ]
      },
      {
        id: 4,
        company: '광주 동구청장배 사업 아이디어 경진대회',
        position: '웹 페이지 기획',
        period: '2023.03 - 2023.06',
        description: '사업 아이디어 대회에서 웹 페이지 기획으로 입상하며 사용자 중심 디자인 사고와 창의적 문제 해결 능력을 입증했습니다.',
        technologies: ['웹 기획', 'UI/UX 설계', '아이디어 발굴', '사용자 리서치'],
        achievements: [
          '대회 입상으로 창의성 및 기획 능력 인정',
          '웹 페이지 기획을 통한 사용자 중심 사고 개발',
          '프론트엔드 개발에 필요한 기획 역량 기반 마련'
        ]
      },
      {
        id: 5,
        company: '교내 세계시민성 프로그램',
        position: '팀장',
        period: '2023.06 - 2023.12',
        description: '세계시민성 프로그램 팀장으로 선발되어 프로그램 기획 및 싱가포르 탐방을 통한 글로벌 마인드를 개발했습니다. 6개월간의 프로그램에서 다양한 문화적 배경을 가진 팀원들과 함께 글로벌 이슈에 대한 해결책을 모색하고, 팀장으로서 리더십과 프로젝트 관리 능력을 향상시켰습니다.',
        technologies: ['프로그램 기획', '국제 교류', '팀 리더십', '문화 이해', '프로젝트 관리', '글로벌 마인드', '협업 스킬'],
        achievements: [
          '프로그램 선발 과정에서 팀장으로 선발',
          '싱가포르 탐방 프로그램 기획 및 실행',
          '다양한 배경의 팀원들과의 협업 경험',
          '글로벌 이슈 해결을 위한 창의적 사고 개발',
          '프로젝트 관리 및 리더십 역량 강화'
        ]
      },
      {
        id: 6,
        company: 'PAS팀 베트남 해외 교육 봉사',
        position: '기획 부팀장',
        period: '2024.04 - 2024.07',
        description: '20명 규모의 대규모 팀에서 기획 부팀장으로 활동하며 조직 관리 및 국제 협업 경험을 쌓았습니다. 4개월간의 준비 기간과 3주간의 베트남 현지 활동을 통해 대규모 프로젝트의 기획부터 실행까지 전 과정을 경험하고, 베트남 현지의 교육 환경과 문화적 특성을 고려한 교육 프로그램을 기획했습니다.',
        technologies: ['프로젝트 기획', '팀 관리', '국제 협력', '커뮤니케이션', '교육 프로그램 설계', '다문화 이해', '조직 관리'],
        achievements: [
          '20명 대규모 팀 협업 및 조율 능력 개발',
          '베트남 현지 교육 프로그램 기획 및 실행',
          '다문화 환경에서의 소통 및 협업 능력 향상',
          '국제적 시각과 글로벌 마인드 개발',
          '교육 프로그램 설계 및 실행 경험 축적'
        ]
      },
      {
        id: 7,
        company: '호남대학교 전자공학과',
        position: '졸업 작품 팀장',
        period: '2024.06 - 2025.02',
        description: '시각 장애인을 위한 자율주행 지팡이 개발 프로젝트 팀장으로 하드웨어와 소프트웨어 융합 기술 경험을 쌓았습니다. Arduino, 다양한 센서, 모터 제어 시스템을 활용하여 실제 사용 가능한 IoT 기기를 개발했으며, 시각 장애인 사용자와의 직접적인 인터뷰와 테스트를 통해 사용자 중심 설계의 중요성을 이해했습니다.',
        technologies: ['Arduino', 'C++', 'IoT', '센서 기술', '프로젝트 관리', '모터 제어', '사용자 중심 설계', '하드웨어 설계'],
        achievements: [
          '졸업 작품 수상으로 기술적 역량 인정',
          '팀원 4명과의 협업을 통한 프로젝트 완성',
          '사용자 중심 설계 사고 개발',
          '실제 사용자 테스트를 통한 기능 검증',
          'IoT 기기 개발 및 하드웨어-소프트웨어 융합 경험'
        ]
      },
      {
        id: 8,
        company: 'SSAFY (삼성 청년 SW 아카데미)',
        position: '교육생',
        period: '2025.01 - 현재',
        description: 'Vue.js와 React를 활용한 웹 애플리케이션 개발, 팀 프로젝트를 통한 협업 역량 강화 및 프론트엔드 전문성을 개발하고 있습니다.',
        technologies: ['Vue.js', 'React', 'TypeScript', 'django', 'node.js', 'mysql', 'Git'],
        achievements: [
          '6월 1학기 수료, 7월 2학기 시작',
          '팀 프로젝트를 통한 협업 및 소통 능력 향상'
        ]
      },
      {
        id: 9,
        company: 'Google AI Essentials',
        position: '수강생',
        period: '2024.12 - 현재',
        description: 'Google AI Essentials 온라인 교육 과정을 수강하며 최신 AI 기술 트렌드와 머신러닝 기초 지식을 습득하고 있습니다.',
        technologies: ['AI/ML', 'Python', 'TensorFlow', '데이터 분석', '머신러닝'],
        achievements: [
          'AI 기술의 최신 트렌드와 응용 분야 학습',
          '머신러닝 기초 이론 및 실습 경험',
          '프론트엔드 개발과 AI 기술 융합 가능성 탐구'
        ]
      }
    ],
    
    // 소셜 링크
    socialLinks: [
      { name: 'GitHub', url: 'https://github.com/Leesseung', icon: 'github' },
      { name: 'Velog', url: 'https://velog.io/@lsm122500/posts', icon: 'velog' }
    ]
  }),
  
  getters: {
    // 특별 프로젝트만 필터링
    featuredProjects: (state) => {
      return state.projects.filter(project => project.featured)
    },
    
    // 모든 기술 스택을 평면화
    allSkills: (state) => {
      return state.skills.flatMap(category => category.items)
    }
  },
  
  actions: {
    // 다크모드 토글
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
      if (this.isDarkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    },
    
    // 프로젝트 추가
    addProject(project) {
      this.projects.push({
        id: this.projects.length + 1,
        ...project
      })
    },
    
    // 프로젝트 업데이트
    updateProject(id, updates) {
      const index = this.projects.findIndex(p => p.id === id)
      if (index !== -1) {
        this.projects[index] = { ...this.projects[index], ...updates }
      }
    },
    
    // 프로젝트 삭제
    deleteProject(id) {
      this.projects = this.projects.filter(p => p.id !== id)
    }
  }
})
