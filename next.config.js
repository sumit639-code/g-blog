/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "lh3.googleusercontent.com","avatars.githubusercontent.com"],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
