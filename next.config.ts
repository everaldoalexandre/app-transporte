import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["pdfkit"],
  },
  /* config options here */
};

export default nextConfig;
