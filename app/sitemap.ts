import { MetadataRoute } from 'next';
import { getAllComparisonSlugs } from './vs/_data/comparisons';
import { getAllAudienceSlugs } from './for/_data/audiences';
import { getAllUseCaseSlugs } from './use-case/_data/usecases';
import { getAllSoftwareSlugs } from './software/_data/software';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://glossystack.com';
  const now = new Date();

  const corePages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 },
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

  return [...corePages, ...comparisonPages, ...audiencePages, ...useCasePages, ...softwarePages];
}
