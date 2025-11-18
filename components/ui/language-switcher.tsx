"use client";

import { Globe } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { type Language, languageNames } from "@/lib/lang";

interface LanguageSwitcherProps {
  currentLang?: Language;
}

export function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const pathname = usePathname();

  // Use prop first, then fallback to path-based detection
  const lang = currentLang || (pathname.split("/")[1] as Language) || "en";

  const getLanguagePath = (newLang: Language): string => {
    // If we're at the root path (/) or other paths without language prefix
    if (!pathname.startsWith(`/${lang}`) || pathname === `/${lang}`) {
      return `/${newLang}`;
    }
    
    // Replace the language segment in the current path
    const pathWithoutLang = pathname.replace(`/${lang}`, "");
    return `/${newLang}${pathWithoutLang || "/"}`;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          {languageNames[lang]}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(languageNames).map(([langCode, name]) => {
          const targetPath = getLanguagePath(langCode as Language);
          const isActive = lang === langCode;
          
          return (
            <DropdownMenuItem key={langCode} asChild>
              <Link
                href={targetPath}
                className={`w-full cursor-pointer ${
                  isActive ? "bg-accent" : ""
                }`}
                onClick={(e) => {
                  // Prevent the default Link behavior if we're clicking on the current language
                  if (isActive) {
                    e.preventDefault();
                  }
                }}
              >
                {name}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
