/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },
  // Enable React strict mode for better performance detection
  reactStrictMode: true,
  // Improve production build performance
  swcMinify: true,
  // Add gzip compression for better network performance
  compress: true,
};

export default nextConfig;
