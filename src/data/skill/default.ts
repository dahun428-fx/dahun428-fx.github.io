import { skill } from "@/models/skill";

export const skills: skill[] = [
  {
    category: "Language",
    items: [{ title: "Java" }, { title: "javascript" }, { title: "Typescript" }, { title: "HTML/CSS" }, { title: "PHP" }, { title: "Scss" }, { title: "Stylus" }],
  },
  {
    category: "Fameworks & Libraries",
    items: [
      { title: "Node.js" },
      {
        title: "Next.js",
      },
      { title: "React.js" },
      { title: "Redux" },
      { title: "RxJs" },
      { title: "Storybook" },
      { title: "Spring Framework" },
      { title: "jQuery" },
    ],
  },
  {
    category: "Infrastructure & Databases",
    items: [
      {
        title: "AWS",
      },
      {
        title: "MySQL",
      },
      {
        title: "Oracle",
      },
      {
        title: "Azure",
      },
      {
        title: "Restful API",
      },
    ],
  },
  {
    category: "Tools & IDEs",
    items: [{ title: "VS Code" }, { title: "Jira" }, { title: "Git" }, { title: "Github" }, { title: "Bitbucket" }, { title: "Jenkins" }, { title: "IDEA" }, { title: "Vercel" }, { title: "Datadog" }],
  },
  {
    category: "ETC",
    items: [{ title: "Ubuntu ( Linux )" }, { title: "Docker" }],
  },
];
