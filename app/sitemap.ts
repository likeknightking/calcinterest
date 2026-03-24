export default function sitemap() {
  return [
    { url: 'https://calcinterest.com', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 1 },
    { url: 'https://calcinterest.com/simple-interest-calculator', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: 'https://calcinterest.com/savings-calculator', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: 'https://calcinterest.com/investment-calculator', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: 'https://calcinterest.com/privacy-policy', lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: 'https://calcinterest.com/terms', lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: 'https://calcinterest.com/about', lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.4 },
  ]
}
