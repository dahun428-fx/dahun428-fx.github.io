import { portfolio } from "@/models/portfolio";

export const portfolioData: portfolio[] = [
  {
    index: 0,
    title: "my-ticket",
    descriptions: [{ content: "movie API ( https://developer.themoviedb.org/ ) 를 이용한 Side Project" }, { content: "JWT 로그인, OAuth2 로그인 (Github / facebook / Google) 기능 구현" }, { content: "게시판페이지 / 상세페이지 등을 Restful 방식으로 구현" }],
    link: "https://github.com/dahun428-fx/my-ticket",
    skillKeywords: ["React.js", "Next.js", "Restful Api", "openAPI", "SpringFramework", "Spring Security", "Spring boot", "JPA", "MySQL"],
  },
];