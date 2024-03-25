/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";
// const repository = "resume";
// const homepage  = "https://dahun428-fx.github.io/resume";
// const { homepage } = require('./package.json');
// const { pathname } = new URL(homepage);
const pathname = 'resume';
const nextConfig = {
  reactStrictMode: true,
  // assetPrefix: !debug ? `/${pathname}/` : "", // production 일때 prefix 경로
  //   trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
  output: "export",
  // basePath: !debug ? `/${pathname}` : "", 
  basePath: !debug ? `/${pathname}` : "", 
};
 
export default nextConfig;
