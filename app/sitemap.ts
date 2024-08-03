export default async function sitemap() {
  const baseUrl = "https://www.lucille-arronis.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
  ];
}
