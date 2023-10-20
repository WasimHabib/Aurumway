/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;
