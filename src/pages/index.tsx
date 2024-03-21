import { NextPage } from "next";
import dynamic from "next/dynamic";

const Home = dynamic(() => import("@/components/pages/Home").then((module) => module.Home), { ssr: false });
const HomePage: NextPage = () => {
  return <Home />;
};

export default HomePage;
