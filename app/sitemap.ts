import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.brandon-mitchell.dev',
      lastModified: '2025-04-05T22:30:00.000Z',
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.brandon-mitchell.dev/about',
      lastModified: '2025-04-05T22:30:00.000Z',
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: 'https://www.brandon-mitchell.dev/projects',
      lastModified: '2025-04-05T22:30:00.000Z',
      changeFrequency: 'yearly',
      priority: 0.8,
     },
     {
      url: 'https://www.brandon-mitchell.dev/contact',
      lastModified: '2025-04-05T22:30:00.000Z',
      changeFrequency: 'yearly',
      priority: 0.8,
    }
  ]
}