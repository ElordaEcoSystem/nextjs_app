import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["kk", "ru"],

  // Used when no locale matches
  defaultLocale: "kk",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(kk|ru)/:path*"],
};
