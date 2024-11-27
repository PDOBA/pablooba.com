import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true, // Helps catch potential issues in React
    swcMinify: false,       // Enable SWC minification for faster builds
};

export default nextConfig;

