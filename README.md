# 🍽 Yalp Wiki

Yalp 프로젝트 진행 일지 기록입니다.

## Team Members

| Leader                                      | Member                                | Member                                  | Member                                    |
| ------------------------------------------- | ------------------------------------- | --------------------------------------- | ----------------------------------------- |
| 윤석규                                      | 강희                                  | 박지영                                  | 손원재                                    |
| [dbstjrrb12](https://github.com/dbstjrrb12) | [kheeyaa](https://github.com/kheeyaa) | [kkdd0757](https://github.com/kkdd0757) | [sonwonjae](https://github.com/sonwonjae) |

## 기술 스택

<img alt="React" src ="https://img.shields.io/badge/React-61DAFB.svg?&style=for-the-badge&logo=React&logoColor=white"/>
<img alt="Redux" src ="https://img.shields.io/badge/Redux-764ABC.svg?&style=for-the-badge&logo=Redux&logoColor=white"/>
<img alt="Storybook" src ="https://img.shields.io/badge/Storybook-FF4785.svg?&style=for-the-badge&logo=StoryBook&logoColor=white"/>
<img alt="JavaScript" src ="https://img.shields.io/badge/javascript-F7DF1E.svg?&style=for-the-badge&logo=javascript&logoColor=black"/>
<img alt="Html5" src ="https://img.shields.io/badge/html5-E34F26.svg?&style=for-the-badge&logo=html5&logoColor=black"/>
<img alt="styledComponents" src ="https://img.shields.io/badge/styledComponents-DB7093.svg?&style=for-the-badge&logo=styledComponents&logoColor=white"/>

### 브라우저 지원 범위

- IE를 제외한 최신 브라우저

## 프로젝트 주제

- [yelp](https://www.yelp.com/)페이지를 클론 코딩 하면서 성능을 개선합니다.

### 서비스 소개

- Yalp 는 지역 기반 레스토랑 검색 및 리뷰 플랫폼입니다.

### 역할 분배

| 이름   | 담당기능            |
| ------ | ------------------- |
| 윤석규 | 필터 기능           |
| 강희   | 검색 기능           |
| 박지영 | 지도 기능           |
| 손원재 | 리뷰, 식당정보 기능 |

### yelp 페이지를 선택한 이유

yelp 기존의 페이지를 클론 하며 성능을 개선하면, 아래와 같은 다양한 목표를 달성하기 위한 방법을 고민해볼 수 있을 것이라 판단하여 선택하였습니다.

## 프로젝트 목표

1. 컴포넌트 단위 개발 ([분리기준](...))

   > - 재사용성
   > - 관심사의 분리

2. 성능 최적화

   > - code splitting
   > - tree shaking
   > - Module bundling
   > - SEO (Web Vital & react-helmet)
   > - 코드 최적화
   > - Source map
   > - Lazy Loading (Infinite Scroll)
   > - SWR (stale-while-revalidate)

3. 웹 접근성

   > - 키보드 접근성 준수
   > - WAI ARIA를 통해 스크린 리더 지원

4. API 사용
   > - Google Map API
   > - Yelp Backend API
   > - Intersection Observer API

## 주요 기능 소개

1. 헤더

- 메인 페이지로 갈 수 있는 로고가 있다.
- 검색창을 통해 키워드 및 지역 기반으로 레스토랑 검색을 할 수 있다.
- 모두 키보드로 접근 가능하다.
- 메인 컨텐츠로 접근할 수 있는 스킵 내비게이션을 키보드 접근시 가장 먼저 보여준다.

2. 검색

- 사용자는 찾고자 하는 레스토랑을 지역을 기반으로 검색할 수 있다.
- 최근에 검색한 내역과 읽은 리뷰를 드롭다운으로 확인할 수 있다.
- 드롭다운은 키보드 화살표로 접근 가능하다.
- 사용자의 현재 위치를 기반으로 검색할 수 있다.
- 검색 버튼의 아이콘은 검색이 완료되기 전까지 로딩 스피너를 보여준다.
- 키보드 접근시 outline을 주어 현재 어디에 focus되어 있는지 알 수 있다.

3. 지도

- 식당 리스트에 존재하는 식당들의 위치를 핀으로 나타내야한다.
- 핀에 식당 리스트 번호가 출력되어야 한다.
- 핀에 hover 했을 때 식당 정보가 나와야한다.
- 핀을 눌렀을때 해당 식당 정보 페이지로 이동해야한다.
- 핀에 호버되었을때 마우스의 모양이 pointer로 바뀌어야한다.
- 리뷰 카드에 hover하면 핀의 배경 색상이 하얀색으로 변경된다.

4. 필터링

- PC 환경에서 필터 영역은 화면 좌측에 고정된다.
- 필터 버튼은 체크 박스를 통해 다중 필터로 구현하며, 거리(distance) 옵션은 라디오 버튼으로 구현한다
- 필터 영역 내의 세부 필터 영역은 총 5개의 카테고리 필터를 제공하며, 각 카테고리 별로 4~5개의 선택지를 보여준다
- 상세 필터 옵션을 볼 경우(See all), 모달로 구현하여 추가 필터 옵션을 제공한다.
- 모달에서 카테고리 별로 상세 옵션 내역은 보이지 않고, 클릭할 경우 보이도록 구현한다(아코디언)
- 모달 내의 탭으로 이동 가능해야 하며, 모달 내의 키보드 트랩을 구현해야 한다.
- 화면 사이즈가 줄어들 경우(반응형), 해당 필터는 버튼 형태로 구현하며 버튼 클릭시 dim 요소와 함께 화면 좌측에 사이드 영역이 노출된다.

---

1. 식당 정보 리스트 페이지(메인페이지)

- 가장 상단에는 어떤 지역의 식당 리스트인지 명시해준다.
- 식당 정보 필터링 기능의 경우, 웹일때는 왼쪽에, 모바일일때는 상단에 위치한다.
- 식당 정보 상단에는 `All Results` 라는 제목을 달아준다.
- 식당 open, close 시간 제공해야한다.
- 식당 메뉴 사진을 캐러셀로 제공해준다.
- 캐러셀에서 이동 버튼은 마지막, 첫번째 사진에서는 `disabled`가 되어야 한다.
- 식당의 별점과 별점을 준 인원 수도 보여줘야 한다.
- 가장 상단의 리뷰를 `text-overflow: ellipsis`로 제공해주어야 한다.
- 식당과 관련된 해시태그를 보여주어야한다.
- `delivery`, `takeout` 등의 식당 세부정보(서비스)도 제공해주어야한다.
- 식당 카드는 전체 클릭이 가능해야하며, 클릭시 식당 상세정보 페이지로 이동해야한다.
- `Start Order` 버튼은 구현하지 않는다.
- 사용자가 선택할 수 있도록 `Pagination`, `Read More`, `무한 스크롤` 중 선택할 수 있도록 한다.
- `Footer`에는 정보는 제공하되 페이지 이동은 구현하지 않는다.

2. 식당 상세정보 페이지

- 식당 요약 정보 메인 정보로 보여주고, 배경 식당 사진 캐러셀로 제공한다.
- 메뉴정보 캐러셀로 제공(가격, 이름, 관련 리뷰)한다.
- 웹사이트 메뉴와 풀 메뉴 제공(링크)한다.(API 확인)
- 위치 정보 제공한다.
- 영업 시간 정보 제공한다.
- 식당에서 제공하는 서비스 목록 제공한다.
- 유저정보, 평점, 리뷰내용, 사진을 보여주는 리뷰 박스 제공
- 리뷰에서 사진을 클릭했을 때 모달 형태로 제공

## 와이어프레임

- [피그마를 통한 시연](https://www.figma.com/file/c8Zc9mgNi98zb33cjk6G4K/Yalp?node-id=0%3A1)

## 컨벤션

### 1. [Commit Message에 대한 컨벤션](https://lightning-dance-fe6.notion.site/24efb4e53bd84f1cb5d093cc3a8fba0a)

> - Commit은 컴포넌트 단위/내부 함수 단위를 기준으로 남깁니다.

| commit type | 설명                                                |
| ----------- | --------------------------------------------------- |
| feat        | 새로운 기능을 추가                                  |
| config      | 개발 환경 설정                                      |
| fix         | 버그 수정                                           |
| style       | 코드 포맷팅, 세미콜론 추가 등 코드 변경이 없는 경우 |
| docs        | 문서 수정                                           |
| refactor    | 코드 리펙토링                                       |
| chore       | 패키지 매니저 등 빌드 관련 설정 수정                |
| test        | 테스트 코드 추가                                    |

```
[type]: [subject] - [Issue #num]

[body]
```

[type] : commit의 타입

[subject] : commit의 제목

[body] : commit의 내용

[Issue] : 이슈 연결

### 2. PR Convention

```
- Issue #13    # 평소 커밋시 사용 - 기능에 해당하는 이슈에 연결
- Close #14    # 이슈를 닫을 때 (일반 개발 이슈)
- Fix #15    # 이슈를 닫을 때 (버그 픽스 이슈)
- Resolve #16    # 문의나 요청 사항 대응
```

### 3. Github Issues와 Projects 활용

> - Issues는 **컴포넌트 단위**로 남깁니다.
> - 컴포넌트를 생성하면서 해야할 일들을 check list 형태로 작성합니다.

### 4. MileStone (Sprint 일정)

> - (Sprint 1) TypeScript, Redux 등 기술 습득 및 주요 컴포넌트 View 제작 완료
> - (Sprint 2) 주요 API(Yelp 등) 연동 및 컴포넌트 기능 구현 완료
> - (Sprint 3) 성능 최적화

## 데일리 루틴

### 평일

| 시간          | 일정                   |
| ------------- | ---------------------- |
| 10:00 ~ 12:00 | 모닝 스크럼            |
| 12:00 ~ 13:00 | 점심                   |
| 13:00 ~ 18:00 | 기능 구현 및 학습      |
| 18:00 ~ 19:00 | 저녁                   |
| 19:00 ~ 22:00 | 코드 리뷰 및 이슈 공유 |

### 주말

- 금요일 코드 리뷰 시간에 주말 동안 해결할 기술 부채를 계획합니다.
