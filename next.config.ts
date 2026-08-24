import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    // 圖片優化配置 - WebP/AVIF 優先
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 31536000, // 1 年快取
  },
  agentRules: false,
  allowedDevOrigins: ["localhost", "127.0.0.1", "192.168.1.190"],
  // 性能優化
  productionBrowserSourceMaps: false,
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
