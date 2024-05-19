import { project } from "@/models/project";

/**
 * 기존 웹페이지 ( php, jQuery) 를 React.js, Next.js, Redux 기술로 리뉴얼 프로젝트에 팀원으로 참여.
기획자가 설계한 API 인터페이스를 구현하고, Storybook, scss 를 활용하여 UI 컴포넌트 구현.
프로젝트 투입 전 React.js 기술 공부 1년 수행으로 실무 투입 시에 복잡한 기술 구현에 참여하여 프로젝트 완성도에 기여.
팀 내 초급자 팀원 5명에게 기술적 조언을 제공하고 코드 리뷰를 실시하여 프로젝트의 유지보수 용이성 및 코드 품질 향상에 기여함.

 */
export const projectData: project[] = [
  {
    index: 0,
    title: "PHP 홈페이지 React 고도화 개발",
    startedAt: "2023/12/01",
    where: "한국미스미",
    descriptions: [
      {
        content:"Description",
        descriptions:[
          {
            content:"한국미스미 웹페이지의 메인페이지의 UIUX 를 개편하였습니다.",
          },
          {
            content:"마케팅에 필요한 Google Analystic 를 웹페이지에 적용하였습니다.",
          },
          {
            content:"신입 개발자의 사내 교육과 코드리뷰를 진행하였습니다.",
          },
        ]
      },
      {
        content: "성과",
        descriptions: [{ content: "React.js 를 개인 프로젝트 공부로 꾸준히 학습하여, 실무 투입 시에 복잡한 기술 구현에 참여하여 프로젝트 완성도에 기여." }, { content: "팀 내 초급자 팀원 5명에게 기술적 조언을 제공하고 코드 리뷰를 실시하여 프로젝트의 유지보수 용이성 및 코드 품질 향상에 기여." }],
      },
      {
        content: "역할",
        descriptions: [
          { content: "기존 웹페이지 ( php, jQuery) 를 React.js, Next.js, Redux 기술로 리뉴얼 프로젝트에 팀원으로 참여" }, { content: "기획자가 설계한 API 인터페이스를 구현하고, Storybook, scss 를 활용하여 UI 컴포넌트 구현." }],
      },
      {
        content: "기술",
        descriptions: [{ content: "React.js, Next.js. TypeScript" }, { content: "Redux 상태 관리" }, { content: "Restful API 통신 및 인터페이스 구현" }, { content: "Storybook 및 scss를 활용한 UI 컴포넌트 구현" }, { content: "Google Analytics 및 Adobe Analytics 태그 적용" }],
      },
    ],
  },
  {
    index: 1,
    title: "프론트엔드 - UIUX 리뉴얼 / 유지보수",
    startedAt: "2023/04/10",
    endedAt: "2023/08/10",
    where: "한국미스미",
    descriptions: [
      {
        content: "성과",
        descriptions: [{ content: "AWS - Web 서버 간 Tsv 파일 데이터 송수신 기능 개발 및 util 화하여 추가 개발 시간 10분 미만으로 단축" },
        { content: "jQuery - ajax 이슈로 발생하는 1초 딜레이를 RxJs Observer 사용, 0.1초로 최소화하여 UX 증대 ( 검색 창 추천 팝업 기능 개발 )" },
         { content: "프로젝트 팀리더 ( PL ) 역할을 맡아, 소스코드 리뷰 및 업무 진척상황 체크 실시. 개발 기한 내에 프로젝트 완료." }],
      },
      {
        content: "역할",
        descriptions: [{ content: "신규 팀원의 빠른 적응을 위해, 협업 툴/업무 로직/업무 가이드 문서 작성과 사내 교육 담당." }, { content: "개발 시 필요한 비즈니스 로직을 유틸화하여 개발 및 배포 수행" }, { content: "QA 시 필요한 테스트 케이스 문서 제작 및 팀 내 배포" }],
      },
      {
        content: "기술",
        descriptions: [{ content: "프론트엔드 - RxJs 라이브러리, Redux, jQuery, Stylus, ajax" }],
      },
    ],
  },
  {
    index: 2,
    title: "마이페이지 프론트/백엔드 개발 / 운영",
    startedAt: "2022/06/10",
    endedAt: "2022/12/10",
    where: "한국미스미",
    descriptions: [
      {
        content: "성과",
        descriptions: [{ content: "이미지 Lazy-Loading, GA 필요 데이터 출력 비동기화 등을 통하여 페이지 출력시간을 7초에서 3초로 단축하여 UX 향상" }, { content: "화면 개발 시 PHP - jQuery - ajax 을 이용한 비동기 방식으로 페이지를 개발하여 페이지 로딩 최소화 ( CRUD / 검색 기능 구현 )" }, { content: "개발 함수들을 캡슐화하여 클라이언트 추가 요구사항에 빠르게 개발하여 마감기한 준수율 향상 및 소프트웨어 유지보수 효율성 향상" }],
      },
      {
        content: "역할",
        descriptions: [
          { content: "프론트엔드 - Docker + Ubuntu + PHP + jQuery 을 활용하여 Mypage : 문의 / 리뷰 / 쿠폰 게시판 개발 및 구현" },
          { content: "백엔드 - AWS + Node.js + MySQL 로 문의게시판, 리뷰게시판의 Restful api 서버 구축 및 배포" },
          { content: "Adobe Analystic (AA) / Google Analystic (GA) 웹페이지 적용" },
        ],
      },
      {
        content: "기술",
        descriptions: [{ content: "PHP (Zend Framework), jQuery, RESTful API" }, { content: "Docker, Ubuntu(Linux), Node.js, PM2 기술 습득 및 적용" }],
      },
    ],
  },
];
