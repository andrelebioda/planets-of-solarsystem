/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/earth",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
