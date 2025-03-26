/** @type {import('next').NextConfig} */

const nextConfig = {
  domains: ["brandon-mitchell.dev", "blog.brandon-mitchell.dev"],
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
        source: "/blog",
        destination: "https://www.blog.brandon-mitchell.dev",
      },
      {
        source: "/blog/:slug",
        destination: "https://www.blog.brandon-mitchell.dev/:slug",
      },
    ];
  },
};

module.exports = nextConfig;
