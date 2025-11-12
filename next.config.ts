import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",

  basePath: isProd ? "/<your-repo-name>" : "",

  images: {
    unoptimized: true,
  },

  compiler: {
    removeConsole: isProd,
  },
  experimental: {
    optimizeCss: true,
  },
  assetPrefix: isProd ? "/SpicyPrivacy/" : "",
};

export default nextConfig;
