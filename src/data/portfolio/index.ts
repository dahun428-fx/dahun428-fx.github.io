import { portfolio } from "@/models/portfolio";

export const portfolioData: portfolio[] = [
  {
    index: 0,
    title: "영화 검색 웹 어플리케이션",
    descriptions: [{ content: "movie API ( https://developer.themoviedb.org/ ) 를 이용한 Side Project" }, 
    { content: "JWT 로그인, OAuth2 로그인 (Github / facebook / Google) 기능 구현" }, 
    { content: "게시판페이지 / 상세페이지 등을 Restful 방식으로 구현" }],

    link: "https://github.com/dahun428-fx/my-ticket",
    link2: "https://my-ticket-theta.vercel.app/",
    skillKeywords: ["React.js", "Next.js", "RESTFul Api", "openAPI", "SpringFramework", "Spring Security", "Spring boot", "JPA", "MySQL"],
  },
  {
    index: 1,
    title: "범죄현황 대시보드 웹 어플리케이션",
    descriptions: [{ content: "공공데이터포털 API ( https://www.data.go.kr/ ) 를 이용한 Side Project" }, 
    { content: "경찰청 범죄 발생 지역별 통계 , 경찰청_전국 경찰서별 강력범죄 발생현황 API 수신" }, 
    { content: "Canvas.js / Chart.js 를 이용하여 대시보드 및 데이터 현황 웹 어플리케이션 제작" }],
    link: "https://github.com/dahun428-fx/next_canvas",
    link2: "https://next-canvas-pied.vercel.app/",
    skillKeywords: ["React.js", "Next.js", "RESTFul Api", "공공데이터포털 API", "Redux", "Chart.js", "Canvas.js"],
  },
];
