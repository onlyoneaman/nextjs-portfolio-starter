/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/feed",
        destination: "/rss.xml",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
