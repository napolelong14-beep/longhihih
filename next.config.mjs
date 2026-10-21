/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.ophim.live',
      },
      {
        protocol: 'https',
        hostname: 'ophim1.com',
      }
    ],
  },
};
export default nextConfig;
