/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true },
  // Use subpath only on GitHub Pages (production)
  basePath: isProd ? '/my-portfolio' : undefined,
  assetPrefix: isProd ? '/my-portfolio' : undefined,
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
