import type { Metadata } from "next";
import { DecisionWheel } from "@/components/decision-wheel";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import type { LanguageType } from "@/lib/translations";

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
    en: "Spin the wheel to get a quick Yes or No answer. A fun and simple decision-making tool for when you need help making choices.",
    ru: "Крутите колесо, чтобы получить быстрый ответ Да или Нет. Забавный и простой инструмент для принятия решений.",
    ja: "ホイールを回して、すぐに「はい」または「いいえ」の答えを得ましょう。決断に迷った時の楽しくシンプルなツール。",
    es: "Gira la rueda para obtener una respuesta rápida de Sí o No. Una herramienta divertida y simple para tomar decisiones.",
  };

  return {
    title: titles[language],
    description: descriptions[language],
  };
}

export default async function LangPage({ params }: PageProps) {
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

      <div className="container mx-auto px-4 py-16">
        <DecisionWheel language={language} />
        <FAQ language={language} />
        <Footer language={language} />
      </div>
    </main>
  );
}
