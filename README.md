# 🍽 Yalp

Yalp 사이트를 분석하여 클론 코딩하는 프로젝트입니다.

## Team Members

| Leader                                      | Member                                | Member                                    |
| ------------------------------------------- | ------------------------------------- | ----------------------------------------- |
| 윤석규                                      | 강희                                     | 손원재                                    |
| [dbstjrrb12](https://github.com/dbstjrrb12) | [kheeyaa](https://github.com/kheeyaa) | [kkdd0757](https://github.com/kkdd0757) | [sonwonjae](https://github.com/sonwonjae) |

## 기술 스택

<img alt="React" src ="https://img.shields.io/badge/React-61DAFB.svg?&style=for-the-badge&logo=React&logoColor=white"/> <img alt="Redux" src ="https://img.shields.io/badge/Redux-764ABC.svg?&style=for-the-badge&logo=Redux&logoColor=white"/> <img alt="Storybook" src ="https://img.shields.io/badge/Storybook-FF4785.svg?&style=for-the-badge&logo=StoryBook&logoColor=white"/> <img alt="JavaScript" src ="https://img.shields.io/badge/javascript-F7DF1E.svg?&style=for-the-badge&logo=javascript&logoColor=black"/> <img alt="Html5" src ="https://img.shields.io/badge/html5-E34F26.svg?&style=for-the-badge&logo=html5&logoColor=black"/> <img alt="styledComponents" src ="https://img.shields.io/badge/styledComponents-DB7093.svg?&style=for-the-badge&logo=styledComponents&logoColor=white"/>


### 역할 분배

| 이름   | 담당기능            |
| ------ | ------------------- |
| 윤석규 | 필터 기능, 디테일 리뷰 기능|
| 강희   | 검색, 페이지네이션, 디테일 캐러셀 기능  |
| 손원재 | 리뷰, 지도, 식당정보 기능 |

## 프로젝트 목표

1. 컴포넌트 단위 개발 ([분리기준](...))

   > - 재사용성
   > - 관심사의 분리

2. 성능 최적화

   > - code splitting
   > - tree shaking
   > - Module bundling
   > - SEO (Web Vital & react-helmet)
   > - Lazy Loading
   > - RTK Query

3. 웹 접근성

   > - 키보드 접근성 준수
   > - WAI ARIA를 통해 스크린 리더 지원

4. API 사용
   > - Google Map API
   > - Yelp Backend API
   > - Intersection Observer API

## Install

```
$ git clone https://github.com/Dumboz/yalp.git
```

1. terminal of Server
```
$ cd server
$ npm install
$ # You have to create .env file 
$ npm start
```

- `./server/.env`
```
PORT=4001
API_KEY=Bearer {Your Yelp API key}
URL=https://api.yelp.com/v3/
BUSINESSES=businesses
SEARCH=/search
AUTOCOMPLETE=autocomplete
```


2. terminal of Client

```
$ cd client
$ npm install
$ # You have to create .env file 
$ npm start
```

- `./client/.env`
```
REACT_APP_MAP_API_KEY={Your Google Map API key}
```

## Yalp 기술 위키

[Yalp 기술 위키 주소](https://github.com/Dumboz/yalp/wiki)
