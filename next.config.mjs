import { fileURLToPath } from 'url';

// Optional: Import bundle analyzer (if you run 'npm run analyze')
let withBundleAnalyzer;
if (process.env.ANALYZE === 'true') {
  withBundleAnalyzer = await import('@next/bundle-analyzer').then((mod) => mod.default());
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for GitHub Pages
  output: 'export',
  // Set the base path if your site is in a subdomain
  // basePath: '',
  // Required for GitHub Pages to work with Next.js
  distDir: 'out',

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
  // Configure asset prefix for GitHub Pages (if not using a custom domain)
  // assetPrefix: '',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },
};

// Apply bundle analyzer if ANALYZE is true
const config = process.env.ANALYZE === 'true' ? withBundleAnalyzer(nextConfig) : nextConfig;

export default config;
