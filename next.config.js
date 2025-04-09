/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    instrumentationHook: true,
  },
  images: {
    domains: ["images.unsplash.com", "api.dicebear.com"],
  },
};

module.exports = nextConfig;
