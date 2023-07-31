/** @type {import('next').NextConfig} */
const withTwin = require('./withTwin');

const nextConfig = withTwin({
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
});

module.exports = nextConfig;
