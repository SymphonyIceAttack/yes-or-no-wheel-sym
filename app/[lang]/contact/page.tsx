import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
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
    en: "Contact Us - Yes or No Wheel",
    ru: "Контакты - Колесо Да или Нет",
    ja: "お問い合わせ - はい/いいえ Wheel",
    es: "Contacto - Yes or No Wheel",
  };

  const descriptions = {
    en: "Get in touch with the Yes or No Wheel team. We'd love to hear your questions, feedback, or suggestions.",
    ru: "Свяжитесь с командой Yes or No Wheel. Мы будем рады вашим вопросам и предложениям.",
    ja: "はい/いいえ Wheelチームにお問い合わせください。フィードバックをお待ちしています。",
    es: "Ponte en contacto con el equipo de Yes or No Wheel. Nos encantaría saber tus preguntas o sugerencias.",
  };

  return {
    title: titles[language],
    description: descriptions[language],
  };
}

export default async function ContactPage({ params }: PageProps) {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t("contactTitle", language)}
          </h1>

          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg mb-8">
            <Image
              src="/images/contact-support.jpeg"
              alt="Contact Support"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
            {t("getInTouchText", language)}
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed">
            {t("contactDescription", language)}
          </p>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              {t("contactEmail", language)}
            </h2>
            <a
              href="mailto:contact@yesornowheel.com"
              className="text-2xl md:text-3xl font-mono bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:opacity-80 transition-opacity break-all"
            >
              contact@yesornowheel.com
            </a>
          </div>

          <p className="text-gray-600 dark:text-gray-400 mb-12">
            {t("contactResponse", language)}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`/${language}`}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:opacity-90 transition-opacity"
            >
              {t("visitHome", language)}
            </Link>
            <Link
              href={`/${language}/about`}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-primary text-primary dark:text-primary font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              {t("aboutUs", language)}
            </Link>
            <Link
              href={`/${language}/privacy`}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-secondary text-secondary dark:text-secondary font-semibold hover:bg-secondary hover:text-white transition-colors"
            >
              {t("privacyPolicy", language)}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
