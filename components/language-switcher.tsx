"use client";

import { Globe } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { LanguageType } from "@/lib/translations";

interface LanguageOption {
  code: LanguageType;
  name: string;
  flag: string;
}

const languages: readonly LanguageOption[] = [
  { code: "en", name: "English", flag: "🇬" },
  { code: "ru", name: "Русский", flag: "🇷" },
  { code: "ja", name: "日本語", flag: "🇯" },
  { code: "es", name: "Español", flag: "🇪" },
] as const;

interface LanguageSwitcherProps {
  currentLang: LanguageType;
}

export function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const router = useRouter();
  const currentLanguage = languages.find((lang) => lang.code === currentLang);

  const handleLanguageChange = (newLang: LanguageType) => {
    router.push(`/${newLang}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="bg-gray-800/60 hover:bg-gray-800/80 text-white border-none gap-2 px-4"
        >
          <Globe className="h-4 w-4" />
          <span className="text-sm">{currentLanguage?.name || "English"}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={currentLang === lang.code ? "bg-accent" : ""}
          >
            <span className="mr-2">{lang.flag}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
