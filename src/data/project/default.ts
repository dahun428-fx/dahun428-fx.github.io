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
        content: "성과",
        descriptions: [
          
          {content : '기존 웹페이지 ( php, jQuery) 를 React.js, Next.js, Redux 기술로 리뉴얼 프로젝트에 팀원으로 참여'},
     { content: "React.js 기술 및 사이드 프로젝트를 개인적으로 꾸준히 학습하여, 실무 투입 시에 복잡한 기술 구현에 참여하여 프로젝트 완성도에 기여." }, { content: "팀 내 초급자 팀원 5명에게 기술적 조언을 제공하고 코드 리뷰를 실시하여 프로젝트의 유지보수 용이성 및 코드 품질 향상에 기여함." }],
      },
      {
        content: "역할",
        descriptions: [
          { content: "기존 웹페이지 ( php, jQuery) 를 React.js, Next.js, Redux 기술로 리뉴얼 프로젝트에 팀원으로 참여" }, { content: "기획자가 설계한 API 인터페이스를 구현하고, Storybook, scss 를 활용하여 UI 컴포넌트 구현." }, { content: "설계자가 설계한 API 인터페이스를 구현하고, stroybook 및 scss를 활용하여 UI 컴포넌트를 구현." }],
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
        descriptions: [{ content: "TSV 파일 데이터 송수신 기능 유틸화 건의 및 개발로 현업 추가 요구사항 10분 미만으로 신속하게 대응." }, { content: "협업 및 코드 리뷰 수행 시 리더 역할을 하여, 프로젝트 완료 예정일 보다 10일 빠르게 개발 완료. QA 시간 1주일 추가 확보로 테스트 케이스 500건 중 10건 미만의 버그 및 오류 수정" }, { content: "기능 개발 시, 사용자 입력 시 발생하는 딜레이타임을 RxJs 라이브러리 개발로 건의하여 해소. 웹애플리케이션 성능 향상에 기여." }],
      },
      {
        content: "역할",
        descriptions: [{ content: "AWS 서버의 TSV 파일 데이터와 웹 서버 간 송수신 기능 개발 및 유틸화." }, { content: "검색 창 추천 팝업 노출 기능 개발 시, 단순 Ajax 비동기식으로 사용할 때 발생하는 입력 딜레이 타임을 개선. Redux 와 RxJs 사용하여 개발하여 웹 애플리케이션 사용자 경험 증가에 기여." }, { content: "총 9명의 개발 팀 중 6명의 팀원을 맡아 PL 역할을 수행. 3명의 개발 진척 상황 및 코드리뷰, 소스분석 조언을 통해 기존 개발 완료시간 보다 10일 빠르게 완료할 수 있었음. QA 시간을 더 확보하여 현업이 제시한 테스트 케이스 중 버그 발견 2%. 버그 수정 시간 확보 및 소프트웨어 안정성 증가에 기여." }],
      },
      {
        content: "기술",
        descriptions: [{ content: "프론트엔드 기술 - RxJs 라이브러리, Redux, jQuery, Stylus, ajax" }],
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
        descriptions: [{ content: "담당 파트 예정 공수 1개월 전 개발 완료. 마감기한 준수율 향상." }, { content: "유지보수가 용이하도록 개발하여 클라이언트 추가 요구사항에 1시간 이내로 대응" }, { content: "페이지 출력 시간 단축을 위해 PM에게 비동기 방식으로 변경을 건의. 해당 방식으로 페이지 출력시간 7초에서 3초로 단축하여 UX 향상." }, { content: "전체 기본동작확인 테스트 케이스 작성 및 배포를 실시하여 QA 시에, 오류 및 버그 케이스 10% 미만으로 감소" }, { content: "Docker, Ubuntu, Node.js, PM2 관련 기술 습득 및 라우터에 대한 개념을 이해하고 프로젝트에 적용." }],
      },
      {
        content: "역할",
        descriptions: [
          { content: "마이페이지의 문의, 리뷰, 쿠폰, 장바구니 게시판 개발 및 구현" },
          { content: "문의, 리뷰게시판 백엔드 서버(Node.js)를 Restful API 방식으로 개발 및 구현" },
          { content: "Adobe Analystic (AA) 및 이미지 출력 시 페이지 출력 시간이 7초 이상으로 지연됨을 파악하고 비동기 전환을 건의하여 페이지 출력 시간 3초로 감소. UX 향상." },
          {
            content: "담당 파트 개발 완료 후 전체 테스트 케이스를 직접 작성하여 팀원들에게 배포. 기본동작확인 방법을 면밀히 작성하여 최대한 오류 및 버그 감소에 기여. 현업 자체 검사 시 버그 건을 10% 미만 준수",
          },
        ],
      },
      {
        content: "기술",
        descriptions: [{ content: "PHP (Zend Framework), jQuery, RESTful API" }, { content: "Docker, Ubuntu(Linux), Node.js, PM2 기술 습득 및 적용" }],
      },
    ],
  },
];
