// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
      },
      // Add other domains you're using:
      {
        protocol: 'https',
        hostname: 'www.svgrepo.com',
      }
    ],
  },
};

export default nextConfig;