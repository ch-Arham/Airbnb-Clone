/** @type {import('next').NextConfig} */

const dotenv = require('dotenv');
dotenv.config({path:".env"});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com']
    //We set domain for images that accept any image from this source
  },
  env: {
    MAPBOX_KEY: process.env.MAPBOX_KEY
  }
}

module.exports = nextConfig
