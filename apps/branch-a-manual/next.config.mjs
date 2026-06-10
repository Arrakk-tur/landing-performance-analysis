/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
