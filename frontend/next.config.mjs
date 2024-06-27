import { withNextVideo } from "next-video/process";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "127.0.0.1" },
      { hostname: "c2.staticflickr.com" },
      { hostname: "www.youtube.com" },
    ],
  },
};

export default withNextVideo(withNextIntl(nextConfig));
