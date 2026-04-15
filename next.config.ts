import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ember-oak-demo",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
