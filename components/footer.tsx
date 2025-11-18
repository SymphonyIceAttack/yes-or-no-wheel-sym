import { type LanguageType, t } from "@/lib/translations";

interface FooterProps {
  language: LanguageType;
}

export function Footer({ language }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-8 text-white/70">
      <p className="text-sm">
        © {currentYear} Yes or No Wheel. {t("footerText", language)}
      </p>
    </footer>
  );
}
