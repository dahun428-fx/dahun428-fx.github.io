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
import { portfolioData } from "@/data/portfolio";
import { certificationData } from "@/data/certification";

import { Education } from "./Education";
import { SideProject } from "./SideProject";
import { Certification } from "./Certification";

export const Resume: React.FC = () => {
  return (
    <div>
      <BriefTop profile={profileData} />
      <Introduce introduceData={introduceData} />
      <Skills skills={skillData} />
      <Experience experiences={experienceData} />
      <Project projects={projectData} />
      <SideProject portfolios={portfolioData} />
      <Education educations={educationData} />
      <Certification certifications={certificationData} />
      <Footer latestUpdatedAt={`2024-03-27`} />
    </div>
  );
};

Resume.displayName = "Resume";
