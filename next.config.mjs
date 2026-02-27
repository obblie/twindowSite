/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";
const repoName = "twindowSite";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProduction ? `/${repoName}` : ""
  },
  basePath: isProduction ? `/${repoName}` : "",
  assetPrefix: isProduction ? `/${repoName}/` : undefined
};

export default nextConfig;
