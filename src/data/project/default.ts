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
    title: "React 리뉴얼 프로젝트",
    startedAt: "2023/12/01",
    where: "한국미스미",
    descriptions: [
      {
        content:"설명",
        descriptions:[
          {
            content:"기존 PHP 와 jQuery 웹 페이지를 Next.js, TypeScript 로 차세대 구축 프로젝트",
          },
          {
            content:"레거시 코드를 개선하고 코드 분할하여 웹 페이지 최적화 작업 수행",
          },
          {
            content:"기존 서비스를 새로운 기술 스택으로 변경 및 재개발 수행",
          },
        ]
      },
      {
        content: "성과",
        descriptions: 
        [
          { content: "React.js, Next.js 를 처음 접해보는 주니어 개발자를 위한 스터디 모임을 주도적으로 개최하여 각 개인의 학습 능력을 향상하여, 프로젝트 업무 효율성을 증진하였습니다." },
          { content: "SSG, SSR 을 적절하게 사용하고 Dynamic Import 로 상품 상세 페이지의 초기 로딩 속도를 개선하여 UX 를 향상하였습니다." }],
      },
      {
        content: "역할",
        descriptions: [
          { content: "Next.js, React.js 기술 스택을 갖춘 개발자로 프로젝트에 참여하였습니다." },
          { content: "다소 복잡하고 난이도가 있는 페이지 및 기능을 신규 컴포넌트로 개발하였습니다." },
          { content: "신규 개발자를 대상으로 React.js, Next.js 스터디 모임을 주도적으로 개최하여 리더로서 참여하였습니다." }
        ],
      },
      {
        content: "기술",
        descriptions: [
          { content: "React.js / Next.js / TypeScript / Redux / RESTFul API / Storybook / Sass / Vercel / Git" },
        ],
      },
    ],
  },
  {
    index: 1,
    title: "프론트엔드 UIUX 리뉴얼 및 유지보수 / 운영",
    startedAt: "2023/04/10",
    endedAt: "2023/08/10",
    where: "한국미스미",
    descriptions: [
      {
        content:'설명',
        descriptions: [
          {
            content:'한국미스미 웹페이지의 메인페이지의 UIUX 개편',
          },
          {
            content: '마케팅에 필요한 Google Analystic 를 웹페이지에 적용',
          },
          {
            content : '신입 개발자의 사내 교육과 코드리뷰를 진행',
          }
        ]
      },
      {
        content: "성과",
        descriptions: [
          { content: "신입 개발자의 업무 적응력을 높여 예상보다 1주일 빠르게 업무에 투입될 수 있도록 하였습니다." },
          { content: "기존 프로젝트 기한보다 2주일 빠르게 개발을 완료하였습니다." },
          { content: "지속적인 단위테스트 및 통합테스트를 수행하여 프로덕션 서버 빌드 후에 장애율 0% 를 달성할 수 있었습니다." },
          { content: "RxJs / Redux 라이브러리를 사용하여 타이핑시 발생하는 검색 추천 팝업 기능의 딜레이타임을 제거하여 UX 를 향상하였습니다." }
        ],
      },
      {
        content: "역할",
        descriptions: [
          { content: "업무 매뉴얼을 작성하여 신입 개발자에게 배포 및 교육을 실시하였습니다." }, 
          { content: "신입 개발자 코드 리뷰를 주도적으로 수행하였으며, 미흡한 점을 피드백하고 문제해결을 위해  같이 고민하고 해결하였습니다." }, 
          { content: "Unit 테스트 케이스를 작성하여 단위테스트를 수행하였으며, PHP Composer 및 개발 테스트 서버를 사용하여 통합테스트를 수행하였습니다." },
          { content: "Google Analystic 활용을 위한 공통 함수 Class 를 개발하였으며, API 데이터를 추출 가공하여 웹페이지 전체적으로 GA 태그 함수를 적용하였습니다." },
        ],
      },
      {
        content: "기술",
        descriptions: [{ content: "JavaScript / Redux / RxJs / PHP / Twig / Stylus CSS / jQuery / Gulp" }],
      },
    ],
  },
  {
    index: 2,
    title: "My페이지 프론트 엔드 개발",
    startedAt: "2022/06/10",
    endedAt: "2022/12/10",
    where: "한국미스미",
    descriptions: [
      {
        content : '설명',
        descriptions :
        [
          {
            content :'한국미스미 웹페이지의 My페이지를 개편하였습니다.',
          },
          {
            content :'페이지 최적화를 중점으로 개발하였습니다.',
          },
          {
            content :'쿠폰, 문의, 리뷰, 장바구니 게시판을 담당하여 개발하였습니다.',
          },
        ]
      },
      {
        content: "성과",
        descriptions: [
          { content: "페이지 개발 시 초기 로딩 속도를 4초에서 1초로 단축하였습니다." }, 
          { content: "리팩토링을 적극적으로 실시하여 요구사항 변경 시에 빠르게 대응하여 프로젝트 개발 기한 내에 전부 개발 완료할 수 있었습니다." }, 
          { content: "비동기방식을 적극적으로 활용하여 기능 속도 및 UX 를 향상하였습니다." }
        ],
      },
      {
        content: "역할",
        descriptions: [
          { content: "쿠폰, 문의, 리뷰, 장바구니 게시판을 담당하여 웹페이지를 개발하였습니다." },
          { content: "페이지 최적화를 위한 아이디어를 제안하고 활용하였습니다." },
          { content: "전반적인 테스트를 위한 QA 문서를 엑셀로 작성하고 단위테스트 및 통합테스트를 수행하였습니다." },
        ],
      },
      {
        content: "기술",
        descriptions: [{ content: "PHP / JavaScript / stylus CSS / RESTFul API / SourceTree / Git / Docker / Ubuntu" }],
      },
    ],
  },
];
