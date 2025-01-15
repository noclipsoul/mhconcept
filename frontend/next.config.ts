import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**/*',
        search: '',
      },
      {
        protocol: "https",
        hostname:"placehold.co"
      }
    ],
  },
};

export default nextConfig;
