const isProduction = process.env.NODE_ENV === 'production'

const assetPrefix = isProduction ? '/lsj-action' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  basePath: isProduction ? '/lsj-action' : '',
  assetPrefix: isProduction ? '/lsj-action' : '',
  env: {
    ASSET_PREFIX: assetPrefix
  }
}

module.exports = nextConfig
