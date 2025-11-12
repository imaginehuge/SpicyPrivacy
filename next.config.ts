import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/SpicyPrivacy" : "",
  assetPrefix: isProd ? "/SpicyPrivacy/" : "",
  images: {
    unoptimized: true,
  },
  compiler: {
    removeConsole: isProd,
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
