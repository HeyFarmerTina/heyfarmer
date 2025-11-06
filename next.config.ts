import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    // Temporarily disable the missing Suspense boundary warning for useSearchParams
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
