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
        source: "https://www.blog.brandon-mitchell.dev",
        destination: "/blog",
      },
      {
        source: "https://www.blog.brandon-mitchell.dev/:slug",
        destination: "/blog/:slug",
      },
    ];
  },
};

module.exports = nextConfig;
