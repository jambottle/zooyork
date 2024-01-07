/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.iching-online.com',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
