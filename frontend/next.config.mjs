import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "127.0.0.1" },
      { hostname: "127.0.0.1:1337" },
      { hostname: "c2.staticflickr.com" },
    ],
  },
};

export default withNextIntl(nextConfig);
