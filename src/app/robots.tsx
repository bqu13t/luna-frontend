import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/login/",
    },
    sitemap: "https://lunafood.ru/sitemap.xml",
  }
}
