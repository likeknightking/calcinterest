export default function sitemap() {
  return [
    { url: 'https://calcinterest.com', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 1 },
  ]
}
