/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.maudau.com.ua',
        pathname: '/**',
      },
    ],
    formats: ['image/webp'],
  },
};

export default nextConfig;
