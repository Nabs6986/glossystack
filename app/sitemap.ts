import { MetadataRoute } from 'next';
import { getAllComparisonSlugs } from './vs/_data/comparisons';
import { getAllAudienceSlugs } from './for/_data/audiences';
import { getAllUseCaseSlugs } from './use-case/_data/usecases';
import { getAllSoftwareSlugs } from './software/_data/software';
import { posts } from './blog/_data/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://glossystack.com';
  const now = new Date();

  const corePages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
  ];

  const comparisonPages: MetadataRoute.Sitemap = getAllComparisonSlugs().map((slug) => ({
    url: `${baseUrl}/vs/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const audiencePages: MetadataRoute.Sitemap = getAllAudienceSlugs().map((slug) => ({
    url: `${baseUrl}/for/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  const useCasePages: MetadataRoute.Sitemap = getAllUseCaseSlugs().map((slug) => ({
    url: `${baseUrl}/use-case/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const softwarePages: MetadataRoute.Sitemap = getAllSoftwareSlugs().map((slug) => ({
    url: `${baseUrl}/software/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  const blogPages: MetadataRoute.Sitemap = Object.keys(posts).map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...corePages, ...comparisonPages, ...audiencePages, ...useCasePages, ...softwarePages, ...blogPages];
}
