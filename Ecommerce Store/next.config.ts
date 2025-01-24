import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains:["s3-alpha-sig.figma.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ]

  },
  experimental: {
    esmExternals: true,
  },
};

export default nextConfig;
