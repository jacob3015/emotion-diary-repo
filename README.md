# Emotion Diary
- 개요: 감정 일기를 기록하고 관리할 수 있는 토이 프로젝트입니다.
- 구성: 웹 클라이언트(emotion-diary)와 API 서버(emotion-diary-api)로 구성 되어 있습니다.
- 목적: Figma > HTML/CSS > React > Spring Boot > DB 개발 흐름을 프로젝트를 통해 경험하기 위함이며, Figma > HTML/CSS > React 과정을 경험하는데 목적을 둡니다.

---
## 프로젝트 구조

```text
emotion-diary-repo/
 ├─ emotion-diary/       # React Web Client
 └─ emotion-diary-api/   # Spring Boot API Server
```

---
## 주요 기능
- 감정 일기 CRUD
- 감정 선택 및 일기 작성
- React Web Client와 Spring Boot API Server 간 REST API 통신

---
## 기술 스택

### Frontend
- React v19 (JavaScript)
- React Router
- TanStack Query
- HTML/CSS (Figma > React 컴포넌트 마크업 및 스타일링)

### Backend
- Spring Boot v3 (Java v21)
- Spring Web
- Spring Data Jpa
- H2 DB (in-memory mode)

---
## 실행 방법

### Frontend

```shell
cd emotion-diary
npm install
npm run dev
```

### Backend

```shell
cd emotion-diary-api
./gradlew bootRun
```

---
## 작업 과정에서 배운점
다음 세 강의 학습 내용을 한데 모아 작업에 녹여내는데 집중하였습니다.
- [Figma Design for beginners](https://help.figma.com/hc/en-us/sections/30880632542743)
- [한 입 크기로 잘라 먹는 리액트](https://www.inflearn.com/course/%ED%95%9C%EC%9E%85-%EB%A6%AC%EC%95%A1%ED%8A%B8)
- [제대로 파는 HTML CSS](https://www.inflearn.com/course/%EC%A0%9C%EB%8C%80%EB%A1%9C-%ED%8C%8C%EB%8A%94-html-css/dashboard)

### Figma → HTML/CSS → React 컴포넌트 전환
- 디자인 자산 변환: Figma로 제작한 버튼, 아이콘, 입력창 등을 HTML/CSS로 재현하고, 이를 React 컴포넌트로 분리했습니다.
- Auto layout > HTML/CSS 변환: Figma의 Auto Layout을 CSS Flexbox로 매핑하면서, justify-content, align-items, gap, padding 등을 통해 동일한 레이아웃을 구현했습니다. 이 과정에서 디자인 속성을 코드로 변환하는 패턴을 배웠습니다.
- SVG 아이콘 문제 해결: 일부 아이콘이 중앙 정렬되지 않는 문제가 있었는데, 이는 viewBox와 내부 path 좌표 불일치 때문이었습니다. viewBox를 일관되게 정의하고 좌표를 조정함으로써 해결했습니다.

### Home 화면 네비게이션 설계
- 월 단위로 일기를 조회할 수 있는 네비게이션을 구현했습니다.
- 상태를 yearMonth 단일 값으로 관리하고, 좌/우 버튼으로 증감시켜 조회 조건을 갱신했습니다.
- 최솟값(1970-01-01)/최댓값(현재 날짜)에 도달하면 버튼을 비활성화하여 불필요한 상태 변경을 방지했습니다.
- 이 과정에서 UI 컴포넌트에 제약 조건을 부여하고 상태를 효과적으로 관리하여 불필요한 렌더링을 방지하는 방법에 대해 베웠습니다.

### 상태 공유와 레이아웃 구조
- 초기 설계에서는 레이아웃 컴포넌트에 상태를 두고 하위 컴포넌트로 전달했지만, 전체 레이아웃이 리렌더링되는 문제가 있었습니다.
- 해결: 네비게이션을 레이아웃에서 분리하고, Home 컴포넌트 내부에서 상태를 관리하도록 리팩토링했습니다.
- 이를 통해 역할 분리와 리렌더링을 고려한 컴포넌트 구조 설계의 중요성을 체감했습니다.

### TanStack Query 도입
- API 호출과 상태 관리를 직접 구현하려니 로딩, 캐싱, 리패치 등 복잡도가 높아졌습니다.
- TanStack Query(React Query)를 도입해 서버 상태를 별도로 관리하면서, 자동 캐싱, 의존성 기반 refetch, API 응답과 로컬 상태 동기화 같은 이점을 경험했습니다.
- 이를 통해 클라이언트 상태와 서버 상트를 분리해 관리하는 이점에 대해 배웠습니다.

---
## 향후 개선 아이디어
- 사용자 인증 기능 추가 (ID/PW 기반 인증 및 토큰(JWT) 기반 인증)
- 클라우드 배포 (AWS, GCP, 등)
- AI 도입 (일기 개요 생성, 감정 변화 리포트 생성 등)