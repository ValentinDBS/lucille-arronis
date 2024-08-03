import { MetadataRoute } from "next";

export default function robot(): MetadataRoute.Robots {
  const baseUrl = "https://www.lucille-arronis.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
