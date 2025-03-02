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
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "https://blog.brandon-mitchell.dev",
        permanent: true
      },
      {
        source: "/blog/:slug*",
        destination: "https://blog.brandon-mitchell.dev/:slug*",
        permanent: true
      }
    ];
  },
};

module.exports = nextConfig;
