import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
        {
            protocol: "https",
            hostname: "avatars.githubusercontent.com",
            port: "",
            pathname: "/u/73560955",
            search: "?s=400&u=33d543f03ece8374ded4ff93d9047e172e2d831a&v=4",
        }
    ]
  }
};

export default nextConfig;
