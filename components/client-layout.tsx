"use client";

import { useParams } from "next/navigation";
import { ThemeProvider } from "@/app/theme-provider";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import type { Language } from "@/lib/lang";

interface ClientLayoutProps {
  children: React.ReactNode;
  lang?: Language; // Optional, defaults to current route language
}

export function ClientLayout({ children, lang }: ClientLayoutProps) {
  // Always call hooks at the top level
  const params = useParams();

  // Properly determine the current language with fallback to 'en'
  const currentLang: Language = (lang ||
    (params?.lang as Language) ||
    "en") as Language;

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="min-h-screen" suppressHydrationWarning>
        {/* Fixed top controls */}
        <div className="fixed top-4 right-4 z-50 flex gap-2">
          <LanguageSwitcher currentLang={currentLang} />
          <ThemeToggle />
        </div>

        {/* Page content */}
        {children}
      </div>
    </ThemeProvider>
  );
}
