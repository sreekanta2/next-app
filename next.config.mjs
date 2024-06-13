/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // or http
        hostname: "cdn.dummyjson.com", // if your website has no www, drop it
      },
    ],
  },
};

export default nextConfig;
