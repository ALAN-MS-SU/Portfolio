/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/u/183554060",
      },
      {
        protocol: "https",
        hostname: "go-skill-icons.vercel.app",
        pathname: "/api/icons/**",
      },
    ],
  },
};

export default nextConfig;
