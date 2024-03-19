/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: [`${process.env.DOMAIN}`],
  },
};

export default nextConfig;
