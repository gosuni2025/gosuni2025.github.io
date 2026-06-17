# AGENTS.md - 프로젝트 가이드

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
| `support.html` | 고순이2025 공용 고객센터 |
| `brand.html` | 고순이2025 브랜드 안내 |
| `vite.config.js` | Vite 빌드 설정 (멀티 페이지) |

## 랄프모드 운영 지침
- **메인 에이전트 역할**: 오염을 방지하기 위해 직접 구현보다 오케스트레이션, 검토, 통합, 검증 위주로 진행
- **서브에이전트 분리**: 실제 구현, 조사, 반복 작업은 가능한 서브에이전트로 분리해서 수행
- **변경사항 보존**: 다른 작업자나 메인 에이전트의 변경을 되돌리지 않고, 현재 변경사항을 보존하면서 최소 범위로 통합
- **검증 우선**: 서브에이전트 결과를 반영한 뒤 변경 파일 범위와 빌드/동작 검증 여부를 확인

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
        support: resolve(__dirname, 'support.html'),
        brand: resolve(__dirname, 'brand.html'),
        // 새 페이지는 여기에 추가!
    },
},
```

## 연락처
- 이메일: gosuni2025@gmail.com
