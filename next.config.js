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
        source: ["/login", "/admin"],
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
