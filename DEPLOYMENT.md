# 배포 가이드

이 문서는 React Tree 컴포넌트를 npm에 배포하는 방법을 설명합니다.

## 사전 준비

### 1. npm 계정 설정

```bash
# npm에 로그인
npm login

# 사용자 정보 확인
npm whoami
```

### 2. GitHub Secrets 설정

GitHub Actions에서 자동 배포를 위해 다음 secrets를 설정해야 합니다:

1. GitHub 저장소의 Settings > Secrets and variables > Actions로 이동
2. 다음 secrets 추가:
   - `NPM_TOKEN`: npm 개인 액세스 토큰

#### npm 토큰 생성 방법:

1. [npmjs.com](https://www.npmjs.com)에 로그인
2. 프로필 > Access Tokens로 이동
3. "Generate New Token" 클릭
4. "Automation" 선택
5. 토큰 생성 후 복사하여 GitHub secrets에 저장

## 수동 배포

### 1. 빌드

```bash
# 의존성 설치
pnpm install

# 빌드
pnpm build

# 타입 체크
pnpm type-check

# 린팅
pnpm lint
```

### 2. npm 배포

```bash
# npm에 로그인 (아직 로그인하지 않은 경우)
npm login

# 배포
npm publish

# 또는 scoped 패키지인 경우
npm publish --access public
```

## 자동 배포 (GitHub Actions)

### 1. 브랜치 설정

- `main` 브랜치에 push하면 자동으로 배포됩니다
- `develop` 브랜치는 CI만 실행됩니다

### 2. 배포 프로세스

1. 코드를 `main` 브랜치에 push
2. GitHub Actions가 자동으로 실행:
   - 테스트 및 빌드
   - semantic-release를 통한 버전 관리
   - npm에 자동 배포
   - GitHub 릴리즈 생성

### 3. 버전 관리

semantic-release가 자동으로 버전을 관리합니다:

- `feat:` - 새로운 기능 → minor 버전 증가
- `fix:` - 버그 수정 → patch 버전 증가
- `BREAKING CHANGE:` - 호환성 깨짐 → major 버전 증가

## 배포 후 확인

### 1. npm 패키지 확인

```bash
# 패키지 정보 확인
npm view @roseline124/react-tree

# 설치 테스트
npm install @roseline124/react-tree
```

### 2. GitHub 릴리즈 확인

- GitHub 저장소의 Releases 탭에서 릴리즈 확인
- CHANGELOG.md 자동 업데이트 확인

## 문제 해결

### 빌드 실패

```bash
# 캐시 정리
pnpm clean

# 의존성 재설치
rm -rf node_modules pnpm-lock.yaml
pnpm install

# 다시 빌드
pnpm build
```

### 배포 실패

1. npm 토큰이 유효한지 확인
2. 패키지 이름이 중복되지 않는지 확인
3. GitHub Actions 로그 확인

### 버전 충돌

```bash
# 로컬 버전 확인
npm version

# 강제로 특정 버전으로 설정
npm version 1.0.0 --no-git-tag-version
```

## 보안 고려사항

1. npm 토큰을 코드에 하드코딩하지 마세요
2. GitHub secrets를 안전하게 관리하세요
3. 정기적으로 npm 토큰을 갱신하세요
4. `.npmrc` 파일을 git에 커밋하지 마세요

## 추가 리소스

- [npm 배포 가이드](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [semantic-release 문서](https://semantic-release.gitbook.io/semantic-release/)
- [GitHub Actions 문서](https://docs.github.com/en/actions)
