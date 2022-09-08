/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['fr', 'en'],
    localeDetection: true,
    defaultLocale: 'fr'
  },
}

module.exports = nextConfig
