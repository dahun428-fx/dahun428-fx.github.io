import { BriefTop } from "./BriefTop";
import { Introduce } from "./Introduce";
import { Skills } from "./Skills/Skills";

export const Resume: React.FC = () => {
  return (
    <div>
      <h1>hello this is resume</h1>
      <BriefTop />
      <Introduce />
      <Skills />
    </div>
  );
};

Resume.displayName = "Resume";
