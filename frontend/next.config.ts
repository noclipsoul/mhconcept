import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1338',
        pathname: '/uploads/**/*',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'https://backoffice.mhconcept.tn/uploads/',
        pathname: '/**/*', // Allow all paths for this hostname
      },
    ],
  },
  webpack(config) {
    // Adding path aliasing for @/* to src/*
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  },
};

export default nextConfig;
