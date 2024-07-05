export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: "/private/",
    },
    sitemap: "https://new.elordaecosystem.kz/sitemap.xml",
  };
}
