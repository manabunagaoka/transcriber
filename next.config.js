/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure static optimization is enabled
  reactStrictMode: true,
  // Add output configuration for better static optimization
  output: 'standalone',
}

module.exports = nextConfig