const isProduction = process.env.NODE_ENV === 'production'

const assetPrefix = isProduction ? '/jigejige' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  basePath: isProduction ? '/jigejige' : '',
  assetPrefix: isProduction ? '/jigejige' : '',
  env: {
    ASSET_PREFIX: assetPrefix
  }
}

module.exports = nextConfig
