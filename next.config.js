/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "boenonnbcwyqchdfeiil.supabase.co",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/blog/:path*',
        has: [
          {
            type: 'host',
            value: 'blog.brandon-mitchell.dev',
          },
        ],
        destination: "/:path*",
      },
      {
        source: "/blog",
        has: [
          {
            type: "host",
            value: "blog.brandon-mitchell.dev",
          },
        ],
        destination: "https://blog.brandon-mitchell.dev",
      },
    ];
  },
};

module.exports = nextConfig;
