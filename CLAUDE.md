# CLAUDE.md - 프로젝트 가이드

## 프로젝트 개요
- **프로젝트명**: Zombie Defense 홈페이지
- **저장소**: gosuni2025/gosuni2025.github.io
- **배포 URL**: https://gosuni2025.github.io

## 기술 스택
- Vite (빌드 도구)
- Vanilla JS
- GitHub Pages (호스팅)

## 주요 파일
| 파일 | 설명 |
|------|------|
| `index.html` | 메인 랜딩 페이지 |
| `privacy.html` | 개인정보 처리방침 |
| `terms.html` | 서비스 이용약관 |
| `vite.config.js` | Vite 빌드 설정 (멀티 페이지) |

## 배포 방법

### 자동 배포 (Husky + gh-pages)
`git push origin main` 하면 자동으로:
1. `npm run build` - Vite 빌드 실행
2. `npm run deploy` - gh-pages 브랜치에 배포

### 수동 배포
```bash
npm run deploy
```

## 페이지 추가 시 주의사항
새 HTML 페이지 추가할 때 **반드시** `vite.config.js`에 등록해야 함!

```javascript
// vite.config.js
rollupOptions: {
    input: {
        main: resolve(__dirname, 'index.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        terms: resolve(__dirname, 'terms.html'),
        // 새 페이지는 여기에 추가!
    },
},
```

## 연락처
- 이메일: gosuni2025@gmail.com
