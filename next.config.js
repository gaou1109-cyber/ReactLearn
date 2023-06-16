/** @type {import('next').NextConfig} */
const nextConfig = {
  // https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
  output: "export",
  distDir: "docs",
  basePath: "/ReactLearn",
};

module.exports = nextConfig;
