/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"], // Using @svgr/webpack to handle SVG as React components
    });
    return config;
  },
  images: {
    domains: ['cdn.sanity.io'], // Add Sanity's CDN domain here
  },
};

export default nextConfig;
