import type { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'

const BASE_URL = 'https://danielwijaya.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]

  // Dynamic routes from Sanity
  const [caseSlugs, productSlugs] = await Promise.all([
    client.fetch<{ slug: string; updatedAt: string }[]>(
      `*[_type == "projects" && defined(slug.current)]{ "slug": slug.current, "updatedAt": _updatedAt }`
    ),
    client.fetch<{ slug: string; updatedAt: string }[]>(
      `*[_type == "shop" && defined(slug.current)]{ "slug": slug.current, "updatedAt": _updatedAt }`
    ),
  ])

  const caseStudyRoutes: MetadataRoute.Sitemap = caseSlugs.map(({ slug, updatedAt }) => ({
    url: `${BASE_URL}/case-studies/${slug}`,
    lastModified: new Date(updatedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const productRoutes: MetadataRoute.Sitemap = productSlugs.map(({ slug, updatedAt }) => ({
    url: `${BASE_URL}/products/${slug}`,
    lastModified: new Date(updatedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...caseStudyRoutes, ...productRoutes]
}
