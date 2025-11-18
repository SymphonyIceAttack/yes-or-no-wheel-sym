import type { Metadata } from "next";
import { DecisionWheel } from "@/components/decision-wheel";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata: Metadata = {
  title: "Yes or No Wheel - Make Quick Decisions Instantly",
  description:
    "Spin the wheel to get a quick Yes or No answer. A fun and simple decision-making tool for when you need help making choices.",
};

export default function RootPage() {
  const defaultLanguage = "en";

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 dark:from-primary/10 dark:via-secondary/10 dark:to-accent/10 transition-colors duration-300">
      <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
        <LanguageSwitcher currentLang={defaultLanguage} />
        <ThemeToggle />
      </div>

      <div className="container mx-auto px-4 py-16">
        <DecisionWheel language={defaultLanguage} />
        <FAQ language={defaultLanguage} />
        <Footer language={defaultLanguage} />
      </div>
    </main>
  );
}
