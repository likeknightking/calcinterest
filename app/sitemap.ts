export default function sitemap() {
  return [
    { url: 'https://calcinterest.com', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 1 },
    { url: 'https://calcinterest.com/simple-interest-calculator', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: 'https://calcinterest.com/savings-calculator', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: 'https://calcinterest.com/investment-calculator', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
  ]
}
