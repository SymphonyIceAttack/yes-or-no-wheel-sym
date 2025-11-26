import type { Metadata } from "next";
import Link from "next/link";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { t, type LanguageType } from "@/lib/translations";

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
    en: "About Us - Yes or No Wheel",
    ru: "О нас - Колесо Да или Нет",
    ja: "私たちについて - はい/いいえ Wheel",
    es: "Acerca de nosotros - Yes or No Wheel",
  };

  const descriptions = {
    en: "Learn more about Yes or No Wheel - the simple decision-making tool that helps you break through decision paralysis.",
    ru: "Узнайте больше о Yes or No Wheel - простом инструменте принятия решений.",
    ja: "はい/いいえ Wheelの詳細 - 決断の停滞を打破するシンプルな意思決定ツール。",
    es: "Conoce más sobre Yes or No Wheel - la herramienta simple para tomar decisiones.",
  };

  return {
    title: titles[language],
    description: descriptions[language],
  };
}

export default async function AboutPage({ params }: PageProps) {
  const { lang } = await params;
  const language = validLanguages.includes(lang as LanguageType)
    ? (lang as LanguageType)
    : "en";

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 dark:from-primary/10 dark:via-secondary/10 dark:to-accent/10 transition-colors duration-300">
      <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
        <LanguageSwitcher currentLang={language} />
        <ThemeToggle />
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t("aboutTitle", language)}
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
            <img
              src="/images/decision-wheel-about.jpeg"
              alt="Yes or No Wheel"
              className="w-full rounded-2xl shadow-lg mb-8"
            />

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {t("aboutDescription1", language)}
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t("ourStory", language)}
            </h2>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {t("ourStoryText", language)}
            </p>

            <img
              src="/images/team-collaboration.jpeg"
              alt="Team Collaboration"
              className="w-full rounded-2xl shadow-lg my-8"
            />

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {t("aboutDescription2", language)}
            </p>

            <img
              src="/images/decision-making.jpeg"
              alt="Decision Making"
              className="w-full rounded-2xl shadow-lg my-8"
            />

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {t("aboutDescription3", language)}
            </p>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t("whyChooseUs", language)}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  {t("feature1Title", language)}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {t("feature1Text", language)}
                </p>
              </div>
              <div className="bg-gradient-to-br from-secondary/10 to-accent/10 dark:from-secondary/5 dark:to-accent/5 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  {t("feature2Title", language)}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {t("feature2Text", language)}
                </p>
              </div>
              <div className="bg-gradient-to-br from-accent/10 to-primary/10 dark:from-accent/5 dark:to-primary/5 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  {t("feature3Title", language)}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {t("feature3Text", language)}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${language}`}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:opacity-90 transition-opacity"
              >
                {t("visitHome", language)}
              </Link>
              <Link
                href={`/${language}/contact`}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-primary text-primary dark:text-primary font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                {t("contact", language)}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
