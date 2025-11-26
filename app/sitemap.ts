import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://yesornowheel.top";
  const languages = ["en", "ru", "ja", "es"] as const;

  const staticPages = ["", "/about", "/contact", "/privacy"] as const;

  const pages: MetadataRoute.Sitemap = [];

  languages.forEach((lang) => {
    staticPages.forEach((page) => {
      const changeFreq =
        page === "" ? "weekly" : page === "/privacy" ? "yearly" : "monthly";
      const priority =
        page === ""
          ? 1.0
          : page === "/about"
            ? 0.7
            : page === "/contact"
              ? 0.6
              : 0.5;

      pages.push({
        url: lang === "en" ? `${baseUrl}${page}` : `${baseUrl}/${lang}${page}`,
        lastModified: new Date("2025-11-26"),
        changeFrequency: changeFreq as
          | "always"
          | "hourly"
          | "daily"
          | "weekly"
          | "monthly"
          | "yearly"
          | "never",
        priority,
      });
    });
  });

  return pages;
}
