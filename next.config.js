/** @type {import('next').NextConfig} */
// Force clean build - v1
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Permissions-Policy',
            value: 'microphone=*, camera=*, display-capture=*'
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin'
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp'
          }
        ],
      },
    ]
  }
}

module.exports = nextConfig