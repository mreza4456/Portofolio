/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // "typedRoutes" moved out of "experimental" in Next.js 15+
  typedRoutes: true,

  // "experimental.turbo" must be an object, not a boolean
  experimental: {
    turbo: {
      // You can customize Turbopack options here (optional)
      rules: {},
    },
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
