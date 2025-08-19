# Vue 3 개발자 포트폴리오 웹사이트

Vue 3와 Tailwind CSS를 기반으로 한 모던한 개발자 포트폴리오 웹사이트입니다.

## 🚀 주요 기능

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 디바이스 지원
- **다크 모드**: 사용자 선호도에 따른 테마 전환
- **Vue 3 Composition API**: 최신 Vue 3 기능 활용
- **Pinia 상태 관리**: 중앙집중식 상태 관리
- **Vue Router**: SPA 라우팅 및 페이지 전환 애니메이션
- **Tailwind CSS**: 유틸리티 퍼스트 CSS 프레임워크
- **Heroicons**: 일관된 아이콘 시스템

## 📋 포함된 섹션

1. **Hero Section**: 자기소개 및 애니메이션 효과
2. **About Me**: 경력, 기술 스택, 자기소개
3. **Skills**: 기술 스택 시각화 및 애니메이션
4. **Projects**: 프로젝트 그리드 및 상세 페이지
5. **Experience**: 경력 타임라인
6. **Contact**: 연락처 폼 및 정보
7. **Footer**: 소셜 링크 및 저작권 정보

## 🛠️ 기술 스택

- **Frontend**: Vue 3, Composition API, Vue Router
- **상태 관리**: Pinia
- **스타일링**: Tailwind CSS
- **아이콘**: Heroicons
- **빌드 도구**: Vite
- **패키지 관리**: npm

## 📦 설치 및 실행

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

### 3. 프로덕션 빌드

```bash
npm run build
```

### 4. 빌드 결과 미리보기

```bash
npm run preview
```

## 🎨 커스터마이징

### 개발자 정보 수정

`src/stores/portfolio.js` 파일에서 다음 정보를 수정할 수 있습니다:

- 개발자 이름, 직함, 이메일
- 자기소개 내용
- 기술 스택 및 숙련도
- 프로젝트 목록
- 경력 정보
- 소셜 링크

### 색상 테마 변경

`tailwind.config.js` 파일에서 primary 색상을 수정하여 전체적인 색감을 변경할 수 있습니다.

### 컴포넌트 구조

```
src/
├── components/
│   ├── sections/          # 섹션별 컴포넌트
│   │   ├── HeroSection.vue
│   │   ├── AboutSection.vue
│   │   ├── SkillsSection.vue
│   │   ├── ProjectsSection.vue
│   │   ├── ExperienceSection.vue
│   │   └── ContactSection.vue
│   ├── Navigation.vue     # 네비게이션
│   └── Footer.vue         # 푸터
├── views/                 # 페이지 컴포넌트
├── stores/                # Pinia 스토어
├── router/                # Vue Router 설정
└── style.css              # 전역 스타일
```

## 🌟 주요 특징

### 애니메이션 효과
- 페이지 전환 애니메이션
- 스크롤 기반 요소 등장 애니메이션
- 호버 효과 및 인터랙션

### 성능 최적화
- 컴포넌트 지연 로딩
- 이미지 최적화
- 번들 크기 최적화

### 접근성
- 시맨틱 HTML 구조
- 키보드 네비게이션 지원
- 스크린 리더 호환성

## 📱 반응형 디자인

- **모바일**: 320px 이상
- **태블릿**: 768px 이상
- **데스크톱**: 1024px 이상
- **대형 화면**: 1280px 이상

## 🔧 개발 가이드

### 새로운 섹션 추가

1. `src/components/sections/` 폴더에 새 컴포넌트 생성
2. `src/views/` 폴더에 해당 페이지 생성
3. `src/router/index.js`에 라우트 추가
4. `src/stores/portfolio.js`에 필요한 데이터 추가

### 새로운 프로젝트 추가

`src/stores/portfolio.js`의 `projects` 배열에 새 프로젝트 객체를 추가하면 됩니다:

```javascript
{
  id: 5,
  title: '새 프로젝트',
  description: '프로젝트 설명',
  image: '/projects/new-project.jpg',
  technologies: ['Vue.js', 'Node.js'],
  github: 'https://github.com/example/project',
  live: 'https://project-demo.com',
  featured: true
}
```

## 📄 라이선스

MIT License

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 연락처

프로젝트에 대한 질문이나 제안사항이 있으시면 언제든 연락해주세요!

---

**Vue 3 + Tailwind CSS로 제작된 모던한 포트폴리오 웹사이트입니다.**
