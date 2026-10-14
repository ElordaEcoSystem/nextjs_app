import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "strapi.elordaecosystem.kz" },
      { hostname: "127.0.0.1" },
      { hostname: "localhost" },
    ],
  },
};

export default withNextIntl(nextConfig);
