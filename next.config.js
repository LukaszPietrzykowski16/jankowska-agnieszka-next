/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  trailingSlash: true,
  images: {
    domains: ['firebasestorage.googleapis.com'],
  }
}

module.exports = nextConfig
