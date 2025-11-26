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
    en: "Privacy Policy - Yes or No Wheel",
    ru: "Политика конфиденциальности - Колесо Да или Нет",
    ja: "プライバシーポリシー - はい/いいえ Wheel",
    es: "Política de privacidad - Yes or No Wheel",
  };

  const descriptions = {
    en: "Privacy Policy for Yes or No Wheel. Learn how we protect your privacy and handle your data.",
    ru: "Политика конфиденциальности Yes or No Wheel. Узнайте, как мы защищаем вашу конфиденциальность.",
    ja: "はい/いいえ Wheelのプライバシーポリシー。プライバシーの保護方法を説明します。",
    es: "Política de privacidad de Yes or No Wheel. Aprende cómo protegemos tu privacidad.",
  };

  return {
    title: titles[language],
    description: descriptions[language],
  };
}

export default async function PrivacyPage({ params }: PageProps) {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t("privacyTitle", language)}
          </h1>

          <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
            {t("privacyLastUpdated", language)}
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed">
            {t("privacyIntro", language)}
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                {t("privacySection1Title", language)}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t("privacySection1Content", language)}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                {t("privacySection2Title", language)}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t("privacySection2Content", language)}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                {t("privacySection3Title", language)}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t("privacySection3Content", language)}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                {t("privacySection4Title", language)}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t("privacySection4Content", language)}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                {t("privacySection5Title", language)}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t("privacySection5Content", language)}
              </p>
            </section>

            <section className="pt-8 border-t border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t("privacyContact", language)}{" "}
                <a
                  href="mailto:contact@yesornowheel.com"
                  className="text-primary hover:underline font-medium"
                >
                  contact@yesornowheel.com
                </a>
                .
              </p>
            </section>
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
              <Link
                href={`/${language}/about`}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-secondary text-secondary dark:text-secondary font-semibold hover:bg-secondary hover:text-white transition-colors"
              >
                {t("aboutUs", language)}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
