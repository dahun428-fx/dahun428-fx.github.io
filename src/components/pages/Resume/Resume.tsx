import { BriefTop } from "./BriefTop";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Introduce } from "./Introduce";
import { Project } from "./Project";
import { Skills } from "./Skills/Skills";

import { projectData } from "@/data/project/default";
import { profileData } from "@/data/profile/default";
import { experienceData } from "@/data/experience/default";

export const Resume: React.FC = () => {
  return (
    <div>
      <BriefTop profile={profileData} />
      <Introduce />
      <Skills />
      <Experience experiences={experienceData} />
      <Project projects={projectData} />
      <Education />
    </div>
  );
};

Resume.displayName = "Resume";
