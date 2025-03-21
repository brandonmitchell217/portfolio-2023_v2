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
        source: '/blog',
        destination: 'https://blog.brandon-mitchell.dev/', 
      },
      {
        source: '/blog/:slug',
        destination: 'https://blog.brandon-mitchell.dev/:slug',
      }
    ]
  }
};

module.exports = nextConfig;
