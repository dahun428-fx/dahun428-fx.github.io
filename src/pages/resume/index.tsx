import { NextPage } from "next";
import dynamic from "next/dynamic";

const Resume = dynamic(() => import("@/components/pages/Resume").then((module) => module.Resume));

const ResumePage: NextPage = () => {
  return <Resume />;
};

export default ResumePage;
