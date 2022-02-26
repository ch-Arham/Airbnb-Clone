/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com']
    //We set domain for images that accept any image from this source
  }
}

module.exports = nextConfig
