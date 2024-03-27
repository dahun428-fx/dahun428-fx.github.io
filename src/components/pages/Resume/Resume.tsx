import { BriefTop } from "./BriefTop";
import { Experience } from "./Experience";
import { Introduce } from "./Introduce";
import { Project } from "./Project";
import { Skills } from "./Skills";
import { Footer } from "./Footer";

import { projectData } from "@/data/project/default";
import { profileData } from "@/data/profile/default";
import { experienceData } from "@/data/experience/default";
import { skills as skillData } from "@/data/skill/default";
import { introduceData } from "@/data/introduce";
import { educationData } from "@/data/education";
import { Education } from "./Education";

export const Resume: React.FC = () => {
  return (
    <div>
      <BriefTop profile={profileData} />
      <Introduce introduceData={introduceData} />
      <Skills skills={skillData} />
      <Experience experiences={experienceData} />
      <Project projects={projectData} />
      <Education educations={educationData} />
      <Footer />
    </div>
  );
};

Resume.displayName = "Resume";
