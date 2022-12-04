/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.pravatar.cc']
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  }
}

module.exports = nextConfig
