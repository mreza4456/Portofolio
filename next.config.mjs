/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typedRoutes: true,
  experimental: {
    turbo: { rules: {} },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(glb|gltf|png|jpe?g|gif|svg)$/i,
      type: 'asset/resource',
    });
    return config;
  },
};

export default nextConfig;
