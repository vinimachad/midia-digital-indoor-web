/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: 's2-g1.glbimg.com'
      }
    ]
  }
}

module.exports = nextConfig
