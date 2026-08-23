import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  agentRules: false,
  allowedDevOrigins: ["localhost", "127.0.0.1", "192.168.1.190"],
};

export default nextConfig;
