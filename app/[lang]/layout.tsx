import type { Metadata } from "next";
import { type Language, languages } from "@/lib/lang";

export async function generateStaticParams() {
  return Object.keys(languages).map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Language }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = languages[lang];

  return {
    title: {
      default: dict.meta.title,
      template: "%s | Yes or No Wheel",
    },
    description: dict.meta.description,
    keywords: dict.meta.keywords.split(", "),
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      type: "website",
      locale: lang,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    alternates: {
      languages: {
        en: "/en",
        ru: "/ru",
        ja: "/ja",
        es: "/es",
      },
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  children;
}
