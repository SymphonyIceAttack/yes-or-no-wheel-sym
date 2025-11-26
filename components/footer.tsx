import Link from "next/link";
import { type LanguageType, t } from "@/lib/translations";

interface FooterProps {
  language: LanguageType;
}

export function Footer({ language }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-12 text-white/70">
      <div className="flex flex-wrap justify-center gap-6 mb-6">
        <Link
          href={`/${language}/about`}
          className="text-sm hover:text-white transition-colors"
        >
          {t("aboutUs", language)}
        </Link>
        <Link
          href={`/${language}/contact`}
          className="text-sm hover:text-white transition-colors"
        >
          {t("contact", language)}
        </Link>
        <Link
          href={`/${language}/privacy`}
          className="text-sm hover:text-white transition-colors"
        >
          {t("privacyPolicy", language)}
        </Link>
      </div>
      <p className="text-sm">
        © {currentYear} Yes or No Wheel. {t("footerText", language)}
      </p>
    </footer>
  );
}
