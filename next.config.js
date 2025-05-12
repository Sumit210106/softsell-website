/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["placeholder.svg"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: true,
  },
  // Improve Fast Refresh stability
  webpack: (config, { dev, isServer }) => {
    // Only apply in development mode
    if (dev && !isServer) {
      // Improve module resolution for Fast Refresh
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        module: false,
      }
    }
    return config
  },
}

module.exports = nextConfig
