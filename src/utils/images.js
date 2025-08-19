// 이미지 경로 관리
export const getImagePath = (imageName) => {
  // GitHub Pages 배포 시 base URL을 고려한 경로
  const baseUrl = import.meta.env.PROD ? '/portfolio' : ''
  return `${baseUrl}/${imageName}`
}

// 프로젝트 이미지 매핑
export const projectImages = {
  'edumeet.png': getImagePath('edumeet.png'),
  'google.png': getImagePath('google.png'),
  'ridar.jpg': getImagePath('ridar.jpg'),
  'protfolio.png': getImagePath('protfolio.png')
}

// 경험 이미지 매핑
export const experienceImages = {
  '호남대학교 전자공학과': getImagePath('honam.jpg'),
  'KT&G 상상 마케팅 스쿨': getImagePath('kt&g.png'),
  'PAS팀 베트남 해외 교육 봉사': getImagePath('pasteam.JPG'),
  '교내 세계시민성 프로그램': getImagePath('singapo.jpg'),
  'Google AI Essentials': getImagePath('google.png'),
  'SSAFY': getImagePath('ssafy.png'),
  'SSAFY (삼성 청년 SW 아카데미)': getImagePath('ssafy.png')
}

// 프로필 이미지
export const profileImage = getImagePath('profile.jpeg')

// 갤러리 이미지 매핑
export const galleryImages = {
  'IMG_0068.JPG': getImagePath('IMG_0068.JPG'),
  'IMG_0067.JPG': getImagePath('IMG_0067.JPG'),
  'IMG_9308.JPG': getImagePath('IMG_9308.JPG'),
  'IMG_7057.JPG': getImagePath('IMG_7057.JPG'),
  'IMG_6738.JPG': getImagePath('IMG_6738.JPG'),
  'IMG_5473.JPG': getImagePath('IMG_5473.JPG'),
  'IMG_4246.JPG': getImagePath('IMG_4246.JPG'),
  'IMG_3655.JPG': getImagePath('IMG_3655.JPG'),
  'IMG_0453.JPG': getImagePath('IMG_0453.JPG'),
  'IMG_0257.JPG': getImagePath('IMG_0257.JPG')
} 