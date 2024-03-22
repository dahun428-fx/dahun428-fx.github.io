import { BriefTop } from "./BriefTop";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Introduce } from "./Introduce";
import { Project } from "./Project";
import { Skills } from "./Skills/Skills";

export const Resume: React.FC = () => {
  return (
    <div>
      <BriefTop />
      <Introduce />
      <Skills />
      <Experience />
      <Project />
      <Education />
    </div>
  );
};

Resume.displayName = "Resume";
