/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "loremflickr.com",
        protocol: "https",
        port: "",
        pathname: "/640/480/**",
      },
    ],
  },
};

module.exports = nextConfig;
