/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['nextjs-panaverse-website.vercel.app'],
  },
}

module.exports = nextConfig
