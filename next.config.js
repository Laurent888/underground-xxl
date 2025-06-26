/** @type {import('next').NextConfig} */
const withVideos = require('next-videos')

const nextConfig = {
  experimental: {
    optimizePackageImports: ['package-name'],
  },
  reactStrictMode: true,
}

module.exports = withVideos(nextConfig)
