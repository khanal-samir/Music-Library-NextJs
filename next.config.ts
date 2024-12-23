import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during build
  },
  images: {
    domains: ["images.unsplash.com", "res.cloudinary.com"], // Add your image domains
  },
};

export default nextConfig;
