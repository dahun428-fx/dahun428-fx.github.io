import { project } from "@/models/project";

export const projectData: project[] = [
  {
    index: 0,
    title: "PHP 홈페이지 React 고도화 개발",
    startedAt: "2023/12/01",
    where: "한국미스미",
    descriptions: [
      {
        content: "성과",
        descriptions: [{ content: "기존의 스파게티 코드로 되어있던 복잡한 구조의 페이지를 개선" }, { content: "SEO 기반 메타태그 설정 개발 및 GA (Google Analytics) 및 AA (Adobe Analytics) 웹 페이지에 적용" }, { content: "설계자가 설계한 API 인터페이스를 구현하고, storybook 및 scss를 활용하여 UI 컴포넌트를 구현함." }, { content: "팀 내 다른 팀원 5명에게 기술적 조언을 제공하고 코드 리뷰를 실시하여 프로그램 코드 품질 향상에 기여함." }],
      },
      {
        content: "역할",
        descriptions: [{ content: "React.js 기술 공부를 개인적으로 1년 꾸준히 실시하여, 실제 프로젝트 투입 시 프로젝트의 복잡한 기술구현을 수행하여 프로젝트 완성도에 기여. ( 멀티다운로드 기능, 상품 비교 팝업 구현 )" }, { content: "팀 내 팀원 5명에게 기술적인 조언을 제공하고 코드 리뷰 실시" }, { content: "설계자가 설계한 API 인터페이스를 구현하고, stroybook 및 scss를 활용하여 UI 컴포넌트를 구현." }],
      },
      {
        content: "기술",
        descriptions: [{ content: "React.js, Next.js" }, { content: "TypeScript, Sass, i18next, JWT token" }, { content: "Redux 상태 관리" }, { content: "Restful API 통신 및 인터페이스 구현" }, { content: "Storybook 및 scss를 활용한 UI 컴포넌트 구현" }, { content: "Google Analytics 및 Adobe Analytics 태그 적용" }],
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
        descriptions: [{ content: "TSV 파일 데이터 송수신 기능 유틸화 건의 및 개발로 현업 추가 요구사항 10분 미만으로 신속하게 대응." }, { content: "PL 역할을 수행하여 프로젝트 완료 예정일 보다 10일 빠르게 개발 완료. QA 시간 1주일 추가 확보로 테스트 케이스 500건 중 10건 미만의 버그 및 오류 수정" }, { content: "사용자 입력시 발생하는 1초 딜레이타임을 Redux 도입으로 해소하여 웹애플리케이션 성능 향상에 기여." }],
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
          { content: "문의, 리뷰, 쿠폰, 장바구니 게시판 개발 및 구현" },
          { content: "문의, 리뷰게시판 백엔드 서버(Node.js)를 Restful API 방식으로 개발 및 구현" },
          { content: "Adobe Analystic (AA) 및 이미지 출력 시 페이지 출력 시간이 7초 이상으로 지연됨을 파악하고 비동기 전환을 건의하여 페이지 출력 시간 3초로 감소. UX 향상." },
          {
            content: "지속적인 테스트 및 버그 수정을 위해 마이페이지의 테스트 케이스를 직접 작성하여 팀원들에게 배포하였음. 기본동작확인 방법을 면밀히 작성하여 최대한 오류 및 버그 감소를 하여, 현업 자체 검사 시 버그 건을 10% 미만으로 하여 빠르게 해당 사이트를 오픈 할 수 있었음.",
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
