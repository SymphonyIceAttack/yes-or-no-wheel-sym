import type { MetadataRoute } from "next";

// 支持的语言列表
const languages = ["en", "ru", "ja", "es"] as const;

// 从环境变量读取基础URL
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yesornowheel.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const changeFrequency = "weekly" as const;

  // 创建根页面映射
  const rootUrls = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency,
      priority: 1.0,
    },
  ];

  // 为每种语言创建页面
  const languageUrls = languages.map((lang) => ({
    url: `${baseUrl}/${lang}`,
    lastModified,
    changeFrequency,
    priority: 1.0,
  }));

  // 返回完整的站点地图
  return [...rootUrls, ...languageUrls];
}
