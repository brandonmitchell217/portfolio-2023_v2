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
  // domain config
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'blog.brandon-mitchell.dev',
            },
          ],
          destination: '/blog/:path*',
        },
      ],
    };
  },
  async redirects() {
    return [
      {
        source: '/blog',
        destination: 'https://blog.brandon-mitchell.dev',
        permanent: true,
      },
      {
        source: '/blog/:path*',
        destination: 'https://blog.brandon-mitchell.dev/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
