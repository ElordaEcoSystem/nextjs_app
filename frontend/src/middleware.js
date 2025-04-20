import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["kk", "ru"],
  defaultLocale: "kk",
});

export const config = {
  matcher: ["/", "/(kk|ru)/:path*"],
};
