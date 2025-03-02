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
        source: "/",
        has: [
          {
            type: "host",
            value: "blog.brandon-mitchell.dev",
          },
        ],
        destination: "/blog",
      },
      {
        source: "/:slug",
        has: [
          {
            type: "host",
            value: "blog.brandon-mitchell.dev",
          },
        ],
        destination: "/blog/:slug",
      },
    ];
  },
};

module.exports = nextConfig;
