import { withNextVideo } from "next-video/process";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "127.0.0.1" },
      { hostname: "localhost" },
      { hostname: "c2.staticflickr.com" },
      { hostname: "www.youtube.com" },
      { hostname: "strapi.elordaecosystem.kz" },
    ],
  },
};

export default withNextVideo(withNextIntl(nextConfig));
