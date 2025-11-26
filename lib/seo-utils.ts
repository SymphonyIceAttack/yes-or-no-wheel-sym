/**
 * SEO Utility Functions
 * Helper functions for managing SEO metadata and structured data
 */

export function generateCanonicalUrl(lang: string, path: string = ""): string {
  const baseUrl = "https://yesornowheel.top";
  if (lang === "en") {
    return `${baseUrl}${path ? `/${path}` : ""}`;
  }
  return `${baseUrl}/${lang}${path ? `/${path}` : ""}`;
}

export function generateLanguageAlternates(): Record<string, string> {
  return {
    en: "https://yesornowheel.top/",
    ru: "https://yesornowheel.top/ru",
    ja: "https://yesornowheel.top/ja",
    es: "https://yesornowheel.top/es",
  };
}

export interface SEOConfig {
  lang: string;
  title: string;
  description: string;
  keywords: string[];
  image?: string;
  type?: "website" | "article";
  section?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

export function createSEOMetadata(config: SEOConfig): {
  title: string;
  description: string;
  keywords: string[];
  openGraph: Record<string, unknown>;
  twitter: Record<string, unknown>;
  alternates: Record<string, unknown>;
} {
  const baseUrl = "https://yesornowheel.top";
  const canonicalUrl = generateCanonicalUrl(config.lang);
  const imageUrl = config.image || `${baseUrl}/android-chrome-512x512.png`;
  const locale =
    config.lang === "en"
      ? "en_US"
      : `${config.lang}_${config.lang.toUpperCase()}`;

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    openGraph: {
      title: config.title,
      description: config.description,
      url: canonicalUrl,
      siteName: "Yes or No Wheel",
      images: [
        {
          url: imageUrl,
          width: 512,
          height: 512,
          alt: config.title,
        },
      ],
      locale,
      type: config.type || "website",
      ...(config.type === "article" && {
        article: {
          section: config.section,
          publishedTime: config.publishedTime,
          modifiedTime: config.modifiedTime,
          authors: config.author ? [config.author] : undefined,
        },
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
      images: [imageUrl],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: generateLanguageAlternates(),
    },
  };
}

export function validateUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function generateMetaDescription(
  content: string,
  maxLength: number = 160,
): string {
  if (content.length <= maxLength) {
    return content;
  }
  return `${content.substring(0, maxLength - 3)}...`;
}

export function extractKeywords(
  text: string,
  maxKeywords: number = 10,
): string[] {
  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 3);

  const frequency: Record<string, number> = {};
  words.forEach((word) => {
    frequency[word] = (frequency[word] || 0) + 1;
  });

  return Object.entries(frequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, maxKeywords)
    .map(([word]) => word);
}

export function generateBreadcrumbStructuredData(
  _lang: string,
  items: { name: string; url: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
