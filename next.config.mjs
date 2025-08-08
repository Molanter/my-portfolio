/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true },
  basePath: '/my-portfolio',
  assetPrefix: '/my-portfolio/',
  trailingSlash: true,
};

export default nextConfig;
