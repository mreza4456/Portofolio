/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
    // Hindari Turbopack di build production (Vercel akan pakai Webpack)
    turbo: false,
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
