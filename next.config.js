/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com']
    //We set domain for images that accept any image from this source
  },
  env: {
    MAPBOX_KEY: 'pk.eyJ1IjoiYXJoYW1raGF3YXIyNDgiLCJhIjoiY2wwN2s1ZnpkMWdjNzNjcDM3aTlzYnY1YSJ9.HwXDgDxJxAgvTss7ko7cTg'
  }
}

module.exports = nextConfig
