import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.techero.ge/:path*',
      },
    ];
  },
};

export default nextConfig;