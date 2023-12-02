/** @type {import('next').NextConfig} */
const nextConfig = {
  key: 'Strict-Transport-Security',
  value: 'max-age=63072000; includeSubDomains; preload'
}

module.exports = nextConfig
