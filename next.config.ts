import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: false,
    experimental: {
        viewTransition: true,
    },
};

export default nextConfig;
