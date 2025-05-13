import { fileURLToPath } from 'url';

// Optional: Import bundle analyzer (if you run 'npm run analyze')
let withBundleAnalyzer;
if (process.env.ANALYZE === 'true') {
  withBundleAnalyzer = await import('@next/bundle-analyzer').then((mod) => mod.default());
}

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
  // Optimize fonts loading
  optimizeFonts: true,
  // Add experimental features for better performance
  experimental: {
    // Reduce the size of client-side JavaScript
    optimizePackageImports: ['bootstrap', 'animate.css'],
    // Improved client assets bundling
    optimizeCss: true,
  },
  // Cache static assets for longer periods
  // Note: Only applied in production builds
  staticPageGenerationTimeout: 120,
  // Increase build performance
  poweredByHeader: false,
  // Output standalone build (better performance for deployment)
  output: 'standalone',
};

// Apply bundle analyzer if ANALYZE is true
const config = process.env.ANALYZE === 'true' ? withBundleAnalyzer(nextConfig) : nextConfig;

export default config;
