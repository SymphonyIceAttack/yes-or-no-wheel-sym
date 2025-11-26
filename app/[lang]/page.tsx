import type { Metadata } from "next";
import Link from "next/link";
import { DecisionWheel } from "@/components/decision-wheel";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { generateCompleteSchemaSet } from "@/lib/seo-schema";
import { type LanguageType, t } from "@/lib/translations";

interface PageProps {
  params: Promise<{ lang: string }>;
}

const validLanguages: LanguageType[] = ["en", "ru", "ja", "es"];

export async function generateStaticParams() {
  return validLanguages.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const language = validLanguages.includes(lang as LanguageType)
    ? (lang as LanguageType)
    : "en";

  const titles = {
    en: "Yes or No Wheel - Make Quick Decisions Instantly",
    ru: "Колесо Да или Нет - Принимайте быстрые решения мгновенно",
    ja: "はい/いいえホイール - 素早く決断を下す",
    es: "Rueda de Sí o No - Toma decisiones rápidas al instante",
  };

  const descriptions = {
    en: "Spin the wheel to get a quick Yes or No answer. A fun and simple decision-making tool for when you need help making choices. Perfect for quick decisions!",
    ru: "Крутите колесо, чтобы получить быстрый ответ Да или Нет. Забавный и простой инструмент для принятия решений, когда вам нужна помощь в выборе.",
    ja: "ホイールを回して、すぐに「はい」または「いいえ」の答えを得ましょう。決断に迷った時の楽しくシンプルなツールです。",
    es: "Gira la rueda para obtener una respuesta rápida de Sí o No. Una herramienta divertida y simple para tomar decisiones cuando necesites ayuda.",
  };

  const keywords = {
    en: [
      "yes no wheel",
      "decision maker",
      "wheel spinner",
      "random choice",
      "decision tool",
      "yes no generator",
      "random decision",
      "decision support",
      "spinning wheel",
      "choice generator",
    ],
    ru: [
      "да нет колесо",
      "генератор решений",
      "случайный выбор",
      "инструмент принятия решений",
      "крутить колесо",
      "генератор да нет",
      "помощник выбора",
    ],
    ja: [
      "はいいいえ ホイール",
      "決断",
      "乱数",
      "意思決定",
      "ランダム選択",
      "decision maker",
      "ランダム決定",
    ],
    es: [
      "rueda si no",
      "toma decisiones",
      "girador aleatorio",
      "herramienta de decisión",
      "generador aleatorio",
      "decisión rápida",
    ],
  };

  const baseUrl = "https://yesornowheel.top";

  return {
    title: titles[language],
    description: descriptions[language],
    keywords: keywords[language],
    openGraph: {
      title: titles[language],
      description: descriptions[language],
      url: language === "en" ? baseUrl : `${baseUrl}/${language}`,
      siteName: "Yes or No Wheel",
      type: "website",
      locale:
        language === "en" ? "en_US" : `${language}_${language.toUpperCase()}`,
      alternateLocale: validLanguages.filter((l) => l !== language),
      images: [
        {
          url: "/android-chrome-512x512.png",
          width: 512,
          height: 512,
          alt: "Yes or No Wheel - Decision Making Tool",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titles[language],
      description: descriptions[language],
      images: ["/android-chrome-512x512.png"],
    },
    alternates: {
      canonical: language === "en" ? baseUrl : `${baseUrl}/${language}`,
      languages: {
        en: baseUrl,
        ru: `${baseUrl}/ru`,
        ja: `${baseUrl}/ja`,
        es: `${baseUrl}/es`,
      },
    },
  };
}

export default async function LangPage({ params }: PageProps) {
  const { lang } = await params;
  const language = validLanguages.includes(lang as LanguageType)
    ? (lang as LanguageType)
    : "en";

  const baseUrl = "https://yesornowheel.top";
  const _pageUrl = language === "en" ? baseUrl : `${baseUrl}/${language}`;

  const schemaData = generateCompleteSchemaSet(language, "home");

  return (
    <>
      <JsonLd data={schemaData} />
      <main className="min-h-screen bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 dark:from-primary/10 dark:via-secondary/10 dark:to-accent/10 transition-colors duration-300">
        <nav className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border-b border-white/10 sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link
              href={`/${language}`}
              className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              {t("heroTitle", language)}
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link
                href={`/${language}/about`}
                className="text-sm font-medium hover:opacity-80 transition-opacity"
              >
                {t("aboutUs", language)}
              </Link>
              <Link
                href={`/${language}/contact`}
                className="text-sm font-medium hover:opacity-80 transition-opacity"
              >
                {t("contact", language)}
              </Link>
              <Link
                href={`/${language}/privacy`}
                className="text-sm font-medium hover:opacity-80 transition-opacity"
              >
                {t("privacyPolicy", language)}
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <LanguageSwitcher currentLang={language} />
              <ThemeToggle />
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-16">
          <DecisionWheel language={language} />
          <FAQ language={language} />
          <Footer language={language} />
        </div>
      </main>
    </>
  );
}
