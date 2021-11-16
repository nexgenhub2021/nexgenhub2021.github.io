const basePath = process.env.NODE_ENV === 'production' ? '' : ''

module.exports = {
  reactStrictMode: true,
  basePath,
  assetPrefix: `${basePath}/`
}
