import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/contact', '/fireextinguishers', '/emergencyexitlighting', '/firesuppression'],
      disallow: '/private/',
    },
    sitemap: 'https://elitebrothersfirenext.vercel.app/sitemap.xml',
  }
}